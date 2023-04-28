import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Mock from "./Mock";
import Tutorials from "./Tutorials";
import Trainer from "./Trainer";

/**
 * This is the main class which uses react to set up the App.
 */

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }></Route>
        <Route path="/tutorials" element={ <Tutorials /> }></Route>
        <Route path="/trainer" element={ <Trainer /> }></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
