import TopBar from "./components/TopBar";
import { useState } from 'react';
import TutorialSection from "./components/TutorialSection";
import { MovesList } from "../src/jsons/tutorial"
import Select from 'react-select';



export default function Tutorial(){
  const [difficultyValue, setDifficultyValue] = useState<{ value: string ; label: string } | null>(null);


  const difficultyOptions = [
    { value: "1", label: "Easy" },
    { value: "2", label: "Medium" }, 
    { value: "3", label: "Hard" },
    { value: "4", label: "All" }
  ];

  var sections = [];
  for(let i = 0; i < MovesList.Moves.length; i++){
      if(MovesList.Moves[i].Level == difficultyValue?.value){
          sections.push(<TutorialSection video = {MovesList.Moves[i].Link} moveName= {MovesList.Moves[i].Name} mainText= {MovesList.Moves[i].Description} 
              altText= {MovesList.Moves[i].Name}></TutorialSection>)
      }
    
      if(difficultyValue?.label == "All" || difficultyValue  == null){
        sections.push(<TutorialSection video = {MovesList.Moves[i].Link} moveName= {MovesList.Moves[i].Name} mainText= {MovesList.Moves[i].Description} 
          altText= {MovesList.Moves[i].Name}></TutorialSection>)
      }
  }
  return(
      <div className="Backdrop">
        <TopBar />
        <Select
              id="difficulty-select"
              options={difficultyOptions}
              value={difficultyValue}
              onChange={value => setDifficultyValue(value)}
            />
        <div className = "Backdrop" role="main">
          {sections}
        </div>
      </div>
  )

}

