import React, { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import Backdrop from "./components/Backdrop";
import SequenceMenu from "./components/SequenceMenu";
import {HashRouter, Route, Routes} from "react-router-dom";


// function App(){

//   return (
//       <HashRouter>
//         <Routes>
//           <Route path="/" element={<TopBar />} index/>
//           <Route path="/" element={<Backdrop />} index/>
//         </Routes>
//       </HashRouter>
//   );
// }



function App() {
  return (
    <HashRouter>
      <TopBar />
      <Backdrop />
    </HashRouter>
  );
}

export default App;
