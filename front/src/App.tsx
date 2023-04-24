import React, { useEffect, useState } from "react";
import Landing from "./Landing";
import Trainer from "./Trainer";
import Tutorial from "./Tutorials";

/**
 * This is our App class which is in charge of setting up the components (HistoryBox and InputBox), commands, and
 * the map and its current overlay. Most of this is taken from the gearup.
 */
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
    // <Landing></Landing>
    // <Trainer></Trainer>
    <Tutorial></Tutorial>
  );
}

export default App;
