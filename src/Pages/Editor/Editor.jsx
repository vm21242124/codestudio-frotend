import React from "react";

import FileExplorer from "../../components/FileExplorer/FileExplorer";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import Menu from "../../components/menu/Menu";
import CodePallete from "../../components/pallate/CodePallete";

import "./Editor.css";
import Editorfooter from "../../components/Editorfooter/Editorfooter";
const Editor = () => {
  return (
    <div className="editor">
      <div className="runbtn">
        <Menu />
      </div>
      <div className="lefe">
        <div className="leftMenu">
          <LeftMenu />
        </div>
        <div className="filehandler">
          <FileExplorer />
        </div>
        <div className="pallete">
          <CodePallete />
        </div>
      </div>
      <div className="ef">
        <Editorfooter />
      </div>
    </div>
  );
};

export default Editor;
