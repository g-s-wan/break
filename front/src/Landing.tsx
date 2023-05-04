import "./styles/App.css";
import React from "react";
import {Link} from "react-router-dom";

//This class defines the landing page, which links to the other pages in the program, the
//Tutorial page and the Trainer page. 

function Landing() {
  return (
      <div className="Landing-Page">
        <div className="Landing-Title" role="heading">
          ✨Breaking✨
        </div>
        <div className="Landing-Buttons">
          <Link to="tutorials" className="Tutorials-Button" role="button">
            Tutorials
          </Link>
          <Link to="trainer" className="Trainer-Button" role="button">
            Trainer
          </Link>
        </div>
      </div>
  );
}

export default Landing;