import Backdrop from "./Backdrop"


type Props = {
    image: string;
    moveName: string;
    mainText: string;
    altText: string;
    // {image, text} : Props
  };

export default function Tutorials({image, moveName, mainText, altText} : Props){
    return(
        <div id = "tutorial-section">
            <div id = "image-section"> 
                <img id = "tutorial-images" src={image} alt= {altText}/>
            </div>
            <div id = "text-section">
                <h3>Move Name: {moveName}</h3>
                <p> Description: {mainText}</p>
            </div>
        </div>
    )

}