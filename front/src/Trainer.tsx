import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import Backdrop from "./components/Backdrop";
import SequenceMenu from "./components/SequenceMenu";
import {HashRouter, Route, Routes} from "react-router-dom";


function Traner() {
    return (
      <HashRouter>
        <TopBar />
        <Backdrop />
      </HashRouter>
    );
  }
  
  export default Traner;
  