import React from "react";
import './Menu.css'
const Menu = () => {
  return (
    <div className="menu">
      <div className="leftmenu">
        <span>File</span>
        <span>Download</span>
      </div>
      <div className="midlemenu">
        <input className="in1" type="text" placeholder="search"  />
      </div>
      <div className="rightmenu">
        <span>Run</span>
        <span>Compile</span>
      </div>
    </div>
  );
};

export default Menu;
