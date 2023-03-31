import React, { useState } from "react";
import "./CodePallete.css";
import NumberedTextarea from "../codeplate/NumberedTextArea";
import {VscRunAbove,VscClose} from 'react-icons/vsc'
import {BiGitCompare} from 'react-icons/bi'
import {SlOptions} from 'react-icons/sl'
const CodePallete = () => {
  const [fileOpen, setFileopen] = useState(false);
  return (
    <>
      <div className="topmenufile">
        <div className="openfiles"><span>vinod.java <VscClose/></span></div>
        <div className="rightrunoptions">
          <span><VscRunAbove/></span>
          <span><BiGitCompare/></span>
          <span><SlOptions/></span>
        </div>
      </div>
      <div className="codepallet">
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
    </>
  );
};

export default CodePallete;
