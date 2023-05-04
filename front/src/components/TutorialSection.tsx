import Backdrop from "./Backdrop"

//props for the TutorialSection component
type Props = {
    video: string;
    moveName: string;
    mainText: string;
    altText: string;
  };

/**
 * TutorialSection Component
 * @param {string} video - The URL for the video tutorial
 * @param {string} moveName - The name of the move being taught in the tutorial
 * @param {string} mainText - The main text or description of the move
 * @param {string} altText - The alternative text for the video
 * @returns {JSX.Element} - A JSX element with the tutorial section
 */
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