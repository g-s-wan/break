import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import Backdrop from "./components/Backdrop";
import {HashRouter, Route, Routes} from "react-router-dom";


/**
 * This is our App class which is in charge of setting up the components (HistoryBox and InputBox), commands, and
 * the map and its current overlay. Most of this is taken from the gearup.
 */
function App(){

  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<TopBar />}>
            <Route index element={<App />} />
          </Route>
        </Routes>
      </HashRouter>
  );
}

export default App;
