import Images from "./components/Images";
import TopBar from "./components/TopBar";
import {HashRouter, Route, Routes} from "react-router-dom";
import TutorialSection from "./components/TutorialSection";
import { MovesList } from "../src/jsons/tutorial";
import Dropdowns from "./components/Dropdowns";
import {difficultyValue} from "./components/Dropdowns"; 



export default function Tutorial(){
    var sections = [];
    for(let i = 0; i < MovesList.Moves.length; i++){
        if(MovesList.Moves[i].Level == difficultyValue){
            sections.push(<TutorialSection video = {MovesList.Moves[i].Link} moveName= {MovesList.Moves[i].Name} mainText= {MovesList.Moves[i].Description} 
                altText= {MovesList.Moves[i].Name}></TutorialSection>)
        }
    }
  return(
      <div>
        <Dropdowns></Dropdowns>
        <TopBar />
        <div className = "Backdrop" role="main">
          {sections}
        </div>
      </div>
  )

}

