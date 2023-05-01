import React, { useState, useEffect } from "react";
import SequenceMenu from "./SequenceMenu";
import Images from "./Images";
import GenerateButton from "./GenerateButton";

type Props = {};

export default function Backdrop(props: Props) {
  const [moves, setMoves] = useState(["Move 1", "Move 2"]);
  // let moves = ["Move 1", "Move 2"];
  let imagePaths = [
    "../../../documents/Two_dancers.jpeg",
    "../../../documents/yabeke.jpeg"
  ];
  let moveData;

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
  }, [currentMoveIndex, intervalId, imagePaths.length]);


  const stopLoop = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  async function getMoveData(): Promise<Array<object>> {
    // Hardcoded length of 5 atm
    await fetch("http://localhost:3230/generate?length=5")
    .then(response => response.json())
    .then(responseObject => {
      moveData = responseObject.data;
      return moveData;
    })

    return [];
  }

  async function updateSequence() {
    let moveData;

    await fetch("http://localhost:3230/generate?length=5")
    .then(response => response.json())
    .then(responseObject => {
      moveData = responseObject.data;
    })

    let moves = [];
    if (moveData) {
      moveData.forEach(move => {
        moves.push(move.name)
      })

      setMoves(moves);
    }
  }

  return (
      <div>
        <button onClick={updateSequence}>Generate</button>
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