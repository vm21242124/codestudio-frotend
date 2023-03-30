import React from "react";
import NumberedTextarea from "../../components/codeplate/NumberedTextArea";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import Menu from "../../components/menu/Menu";

import "./Editor.css";
const Editor = () => {
  return (
    <div className="editor">
      <div className="runbtn">
        <Menu/>
      </div>
      <div className="leftMenu">
        <LeftMenu/>
      </div>
      {/* <div className="de">
        <div className="editorside">
          <NumberedTextarea />
        </div>
        <div className="outputside"></div>
      </div> */}
    </div>
  );
};

export default Editor;
