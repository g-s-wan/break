import Images from "./components/Images";
import TopBar from "./components/TopBar";
import {HashRouter, Route, Routes} from "react-router-dom";
import Tutorials from "./components/TutorialSection";



export default function Tutorial(){
  return(
      <div>
        <TopBar />
        <div className = "Backdrop" role="main">
          <Tutorials image= "../../../documents/Two_dancers.jpeg" moveName="placeholder" mainText="text text text" altText="placeholder"></Tutorials>
          <Tutorials image= "../../../documents/Two_dancers.jpeg" moveName="placeholder" mainText="text text text" altText="placeholder"></Tutorials>
          <Tutorials image= "../../../documents/Two_dancers.jpeg" moveName="placeholder" mainText="text text text" altText="placeholder"></Tutorials>
        </div>
      </div>
  )

}