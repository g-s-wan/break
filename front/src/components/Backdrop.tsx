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
    if (intervalId) {
      clearInterval(intervalId);
    }

    const id = setInterval(() => {
      setCurrentMoveIndex((prevIndex) => {
        if (prevIndex >= imagePaths.length - 1) {
          clearInterval(intervalId!);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 10000);

    setIntervalId(id);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [currentMoveIndex, intervalId, imagePaths]);

  const stopLoop = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3230/generate?length=5");
      const data = await response.json();
      let moves: Array<string> = [];
      let paths: Array<string> = [];

      const moveData: Array<Move> = data.data.map((move: Move) => {
        const moveName = move.name;
        moves.push(moveName);
        const movePaths = movesData();
        if (moveName == undefined) {
          console.log("move name is undefined?")
        } else {
          paths.push(movePaths.get(moveName) as string);
        }
      });

      setMoves(moves);
      setImagePaths(paths);
    } catch (error) {
      console.error("Failed to fetch move data", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={fetchData}>Generate</button>
      <nav className="Backdrop">
        <SequenceMenu
          moves={moves}
          currentMoveIndex={currentMoveIndex}
          stopLoop={stopLoop}
        />
        <Images
          filePath={currentMoveIndex < imagePaths.length ? imagePaths[currentMoveIndex] : ""}
          altText="Image"
        />
      </nav>
    </div>
  );
}