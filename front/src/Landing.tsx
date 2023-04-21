import "./styles/App.css";
import React from "react";
import {Link} from "react-router-dom";

function Landing() {
  return (
      <div className="Landing-Page">
        <div className="Landing-Title">
          ✨Breaking✨
        </div>
        <div className="Landing-Buttons">
          <Link to="mock" className="Landing-Button">
            Tutorials
          </Link>
          <Link to="mock" className="Landing-Button">
            Trainer
          </Link>
        </div>
      </div>
  );
}

export default Landing;