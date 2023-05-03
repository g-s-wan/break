import React, { useState, useEffect } from "react";


type Props = {
  moves: string[];
  currentMoveIndex: number;
  stopLoop: () => void; // New prop to stop the loop
  fetchData: () => void;
};

export default function SequenceMenu({
  moves,
  currentMoveIndex,
  stopLoop,
    fetchData
}: Props) {
  const [selectedMoveIndex, setSelectedMoveIndex] = useState(currentMoveIndex);

  useEffect(() => {
    // Check if the current move index is the last move
    if (currentMoveIndex === moves.length - 1) {
      // Call the stopLoop function to stop the loop
      stopLoop();
    }
  }, [currentMoveIndex, moves, stopLoop]);

  return (
      <div>
        <div className="sequence-menu">
          <h2 className="sequence-menu-header">Current Sequence</h2>
          <div className="sequence-menu-moves">
            {moves.map((move, index) => (
                <div
                    key={index}
                    className={`sequence-menu-move ${
                        index === currentMoveIndex ? "highlighted" : ""
                    }`}
                >
                  {move}
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}