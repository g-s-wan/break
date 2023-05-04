import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import Backdrop from "./components/Backdrop";
import SequenceMenu from "./components/SequenceMenu";
import {HashRouter, Route, Routes} from "react-router-dom";

//This defines the Trainer page, which contains the TopBar and the Backdrop
function Trainer() {
    return (
        <div>
          <TopBar />
          <Backdrop />
        </div>
    );
  }
  
  export default Trainer;
  