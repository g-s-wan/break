import Images from "./components/Images";
import TopBar from "./components/TopBar";
import {HashRouter, Route, Routes} from "react-router-dom";
import Tutorials from "./components/Tutorials";




export default function Tutorial(){
    return(
        <HashRouter>
            <TopBar />
            <div className="Backdrop"> 
                <Tutorials image= "../../../documents/Two_dancers.jpeg" moveName="placeholder" mainText="text text text" altText="placeholder"></Tutorials>
            </div>
        </HashRouter>
    )

}