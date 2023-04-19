import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import Backdrop from "./components/Backdrop";


/**
 * This is our App class which is in charge of setting up the components (HistoryBox and InputBox), commands, and
 * the map and its current overlay. Most of this is taken from the gearup.
 */
function App(){

  return (
    <div className="App">
        <div className="container">
          <TopBar></TopBar>
          <Backdrop></Backdrop>
        </div>
    </div>
  );
}

export default App;
