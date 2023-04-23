import { BrowserRouter, Route, Link } from "react-router-dom";
import Dropdowns from "./Dropdowns";
import SequenceMenu from "./SequenceMenu";
import React, { useState, useEffect } from "react";
import Images from "./Images";


export default function Backdrop(){
    const moves = ["Move 1", "Move 2"];
    //const currentMoveIndex = 2; // set the initial highlighted move index
    const [currentMoveIndex, setCurrentMoveIndex] = useState(0); // set the initial highlighted move index

    const imagePaths = [
        "front/documents/Two_dancers.jpeg",
        "front/documents/yabeke.jpeg"
      ];

  // Update the current move index every 10 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentMoveIndex((prevIndex) => {
                if (prevIndex < 0) {
                    return imagePaths.length - 1;
                } else if (prevIndex >= imagePaths.length) {
                    return 0;
                } else {
                    return prevIndex + 1;
                }
            });
    }, 10000); // 10 seconds in milliseconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [imagePaths]);
    
    // render the map component with the overlay data as a source and layer
    return( 
        <nav className="Backdrop">
            <Dropdowns />
            <SequenceMenu moves={moves} currentMoveIndex={currentMoveIndex} />
            <Images filePath={imagePaths[currentMoveIndex]} altText="Image" />
        </nav>

)}