import React, { useState } from "react";
import "./CodePallete.css";
import NumberedTextarea from "../codeplate/NumberedTextArea";
import { VscRunAbove } from "react-icons/vsc";
import { BiGitCompare } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";
import { useDispatch } from "react-redux";
const CodePallete = () => {
  const [fileOpen, setFileopen] = useState(true);
  const dispatch=useDispatch();
  const setLang=(lang)=>{
    
    dispatch({
      type:"setlangauge",
      payload:lang
    })
  }
  return (
    <>
      <div className="topmenufile">
        {fileOpen?"":
         <div className="sellang">
         <button onClick={()=>setLang("java")} className="tbutton">java</button>
         <button onClick={()=>setLang("cpp")} className="tbutton">c++</button>
         <button onClick={()=>setLang("c")} className="tbutton">c</button>
         <button onClick={()=>setLang("python")} className="tbutton">python</button>
       </div>}
       
        <div className="rightrunoptions">
          <span>
            <VscRunAbove />
          </span>
          <span>
            <BiGitCompare />
          </span>
          <span>
            <SlOptions />
          </span>
        </div>
      </div>
      <div className="codepallet">
        {fileOpen ? (
          <div className="infor">
            <p>welcome to vmstudio</p>
            <button onClick={(e) => setFileopen(false)} className="lgbutton">
              run program
            </button>
          </div>
        ) : (
          <div className="plate">
            <NumberedTextarea />
            <div className="input"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default CodePallete;
