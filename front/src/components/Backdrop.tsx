import { BrowserRouter, Route, Link } from "react-router-dom";
import React from "react";
import Dropdowns from "./Dropdowns";
import SequenceMenu from "./SequenceMenu";


export default function Backdrop(){
    const moves = ["Move 1", "Move 2", "Move 3", "Move 4", "Move 5"];
    const currentMoveIndex = 2; // set the initial highlighted move index
    
    // render the map component with the overlay data as a source and layer
    return( 
        <nav className="Backdrop">
            <Dropdowns />
            <SequenceMenu moves={moves} currentMoveIndex={currentMoveIndex} />
        </nav>

)}