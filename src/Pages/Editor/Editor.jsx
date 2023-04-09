import React from "react";

import LeftMenu from "../../components/LeftMenu/LeftMenu";

import CodePallete from "../../components/pallate/CodePallete";

import "./Editor.css";
import Editorfooter from "../../components/Editorfooter/Editorfooter";
const Editor = () => {
  return (
    <div className="editor">
      <div className="lefe">
        <div className="leftMenu">
          <LeftMenu />
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
