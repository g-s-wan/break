import Backdrop from "./Backdrop"


type Props = {
    video: string;
    moveName: string;
    mainText: string;
    altText: string;
  };

export default function TutorialSection({video, moveName, mainText, altText} : Props){
    return(
        <div id = "tutorial-section">
            <div id = "image-section"> 
                <video className = "tutorial-images" >
                    <source src = {video} type="video/mp4"> </source>
                </video>
            </div>
            <div id = "text-section">
                <h3>Move Name: {moveName}</h3>
                <p> Description: {mainText}</p>
            </div>
        </div>
    )

}