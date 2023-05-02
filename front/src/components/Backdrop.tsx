import React, { useState, useEffect } from "react";
import SequenceMenu from "./SequenceMenu";
import Images from "./Images";
import movesData from "./movephotos";

type Move = {
  name: string;
  imagePath: string;
};

type Props = {};

export default function Backdrop(props: Props) {
  const [moves, setMoves] = useState<Array<string>>([]);
  const [imagePaths, setImagePaths] = useState<Array<string>>([]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentMoveIndex((prevIndex) =>
        prevIndex >= moves.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
  
    return () => clearInterval(id);
  }, [moves]);

  const stopLoop = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3230/generate?length=8");
      const data = await response.json();
      const moves: Array<string> = [];
      const paths: Array<string> = [];
  
      data.data.forEach((move: Move) => {
        const moveName = move.name;
        const movePath = movesData().get(moveName);
        if (movePath) {
          moves.push(moveName);
          paths.push(movePath);
        }
      });
  
      setMoves(moves);
      setImagePaths(paths);
      setCurrentMoveIndex(0); // reset current move index
    } catch (error) {
      console.error("Failed to fetch move data", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={fetchData}>Generate New</button>
      <nav className="Backdrop">
        <SequenceMenu
          moves={moves}
          currentMoveIndex={currentMoveIndex}
          stopLoop={stopLoop}
        />
        <Images
          filePath={currentMoveIndex < imagePaths.length ? imagePaths[currentMoveIndex] : ""}
          altText="Image"
          currentMoveName={moves[currentMoveIndex]}
        />
      </nav>
    </div>
  );
}