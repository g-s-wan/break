import Images from "./components/Images";
import TopBar from "./components/TopBar";
import {HashRouter, Route, Routes} from "react-router-dom";
import TutorialSection from "./components/TutorialSection";



export default function Tutorial(){
  return(
      <div>
        <TopBar />
        <div className = "Backdrop" role="main">
          <TutorialSection video= "front/src/data (videos)/2 Step.mp4"  moveName="placeholder" mainText="text text text" altText="placeholder"></TutorialSection>
          {/* <TutorialSection image= "../../../documents/Two_dancers.jpeg" moveName="placeholder" mainText="text text text" altText="placeholder"></TutorialSection>
          <TutorialSection image= "../../../documents/Two_dancers.jpeg" moveName="placeholder" mainText="text text text" altText="placeholder"></TutorialSection> */}
        </div>
      </div>
  )

}