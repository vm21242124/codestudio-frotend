import React from "react";
import { SlOptions } from "react-icons/sl";
import {AiOutlineDown,AiOutlineFolderAdd ,AiOutlineFileAdd} from 'react-icons/ai'
import "./FileExplorer.css";
const FileExplorer = () => {
  return (
    <div className="explorer">
      <div className="exp">
        <span>EXPLORER</span>
        <span>
          <SlOptions />
        </span>
      </div>
      <div className="file">
        <div className="e">
          <span><AiOutlineDown/></span>
          <span>project</span>
        </div>
        <div className="foption">
          <span><AiOutlineFileAdd/></span>
          <span><AiOutlineFolderAdd/></span>
        </div>

      </div>
    </div>
  );
};

export default FileExplorer;
