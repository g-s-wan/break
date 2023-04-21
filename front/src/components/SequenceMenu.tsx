import React, { useState } from "react";

type Props = {
    moves: string[];
    currentMoveIndex: number;
  };

export default function SequenceMenu({ moves, currentMoveIndex }: Props) {

    const [selectedMoveIndex, setSelectedMoveIndex] = useState(currentMoveIndex);

    return (
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
      );


}
