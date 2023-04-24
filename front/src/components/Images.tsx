import React, { useState, useEffect } from "react";

interface ImagesProps {
    filePath: string;
    altText: string;
  }

export default function Images({filePath, altText}: ImagesProps) {
  return (
    <div className="Images">
      <img src={filePath} alt={altText} />
    </div>
  );
}