import React from "react";
import "./LeftMenu.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineFile } from "react-icons/ai";
import { VscDebugAltSmall } from "react-icons/vsc";
import {VscExtensions} from 'react-icons/vsc'
const LeftMenu = () => {
  return (
    <div className="verticalMenu">
      <span>
        <AiOutlineFile />
      </span>
      <span>
        <BsSearch />
      </span>
      <span>
        <VscDebugAltSmall />
      </span>
      <span><VscExtensions/></span>
    </div>
  );
};

export default LeftMenu;
