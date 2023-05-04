import { BrowserRouter, Route, Link } from "react-router-dom";
import React from "react";

/**
Renders the TopBar component that contains navigation links to other pages.
Uses react-router-dom to manage routing and linking between pages.
@returns {JSX.Element} - A JSX element that represents the TopBar component
*/
export default function TopBar(){
    // render the map component with the overlay data as a source and layer
    return(
        <div className="TopBar" role="navigation">
          <li id="Tutorial-Button" role="button">
            <Link to="/tutorials">Tutorials</Link>
          </li>
          <li id="Title" role="button">
            <Link to="/trainer">Trainer</Link>
          </li>
        </div>
)}