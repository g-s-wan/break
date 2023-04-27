import React, { useState, useEffect } from "react";
import SequenceMenu from "./SequenceMenu";
import Images from "./Images";

type Props = {};

export default function Backdrop(props: Props) {
  const moves = ["Move 1", "Move 2"];
  const imagePaths = [
    "../../../documents/Two_dancers.jpeg",
    "../../../documents/yabeke.jpeg"
  ];

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

  return (
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
  );
}