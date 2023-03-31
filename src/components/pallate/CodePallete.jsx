import React, { useState } from "react";
import "./CodePallete.css";
import NumberedTextarea from "../codeplate/NumberedTextArea";
const CodePallete = () => {
  const [fileOpen, setFileopen] = useState(true);
  return (
    <div className="codepallet">
      <div className="topmenufile"></div>
      {fileOpen ? (
        <div className="infor">
          <p>welcome to vmstudio</p>
        </div>
      ) : (
        <div className="plate">
          <NumberedTextarea />
        </div>
      )}
    </div>
  );
};

export default CodePallete;
