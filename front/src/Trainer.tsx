import React from "react";
import TopBar from "./components/TopBar";
import Backdrop from "./components/Backdrop";

/**
 * This defines the Trainer page, which contains the TopBar, Backdrop, and a heading. This page is
 * where users are able to generate and view move sequences.
 */
function Trainer() {
    return (
        <div>
          <TopBar/>
          <h1 id="Trainer-Header" role="heading">Trainer</h1>
          <Backdrop />
        </div>
    );
  }
  
  export default Trainer;
  