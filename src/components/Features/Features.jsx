import React from "react";
import "./Feature.css";
const Features = () => {
  return (
    <div className="features">
      <div className="feature">
        <img
          className="f1"
          src="https://code.visualstudio.com/assets/images/home-intellisense.svg"
          alt=""
        />
        <div className="info">
          <h3>Online Compiling</h3>
          <p>
            Go beyond syntax highlighting and autocomplete with IntelliSense,
            which provides smart completions based on variable types, function
            definitions, and imported modules.
          </p>
        </div>
      </div>
      <div className="feature">
        <div className="info">
          <h3>File Downloading</h3>
          <p>
            Go beyond syntax highlighting and autocomplete with IntelliSense,
            which provides smart completions based on variable types, function
            definitions, and imported modules.
          </p>
        </div>
        <img
          className="f1"
          src="https://code.visualstudio.com/assets/images/home-debug.svg"
          alt=""
        />
      </div>
      <div className="feature">
        <img
          className="f1"
          src="https://code.visualstudio.com/assets/images/home-azure.svg"
          alt=""
        />
        <div className="info">
          <h3>Developement without and disturebent</h3>
          <p>
            Go beyond syntax highlighting and autocomplete with IntelliSense,
            which provides smart completions based on variable types, function
            definitions, and imported modules.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Features;
