import React, { useState, useEffect } from "react";

interface ImagesProps {
  filePath: string;
  altText: string;
  currentMoveName: string;
}

export default function Images({ filePath, altText, currentMoveName }: ImagesProps) {
  return (
    <div className="ImagesContainer" role="main">
      <div className="Images">
        <img src={filePath} alt={altText} />
      </div>
      <div className="CurrentMove">{`Current Move: ${currentMoveName}`}</div>
    </div>
  );
}