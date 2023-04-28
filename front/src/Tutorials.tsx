import Images from "./components/Images";
import TopBar from "./components/TopBar";
import {HashRouter, Route, Routes} from "react-router-dom";
import TutorialSection from "./components/TutorialSection";
import {useEffect, useState} from "react";

function Tutorials(){
  const [moveList, setMoveList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3230/moves")
    .then(response => response.json())
    .then(responseObject => {
      setMoveList(responseObject.data);
    });
  }, []);

  return(
        <div>
            <TopBar />
            <div className = "Backdrop">
              {moveList.map((item, index) => (
                  <TutorialSection image='../../../documents/Two_dancers.jpeg' moveName={item.name} mainText={item.description} altText='placeholder' />
              ))}
            </div>
        </div>
    )
}

export default Tutorials;