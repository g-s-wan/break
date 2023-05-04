import Backdrop from "./Backdrop"


type Props = {
    video: string;
    moveName: string;
    mainText: string;
    altText: string;
  };

export default function TutorialSection({video, moveName, mainText, altText} : Props){
    return(
        <div id = "tutorial-section" aria-label="Tutorial Video">
            <div id = "image-section" key={moveName}>
                <video className = "tutorial-images" controls >
                    <source key={moveName} src = {video} type="video/mp4"/>
                </video>
            </div>
            <div id = "text-section">
                <h3 id = "actual-text">Move Name: {moveName}</h3>
                <p id = "actual-text"> Description: {mainText}</p>
            </div>
        </div>
    )

}