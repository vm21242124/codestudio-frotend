import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="l">
        <h3>VM studio code</h3>
        <span>Docs</span>
        <span>FAQ</span>
        <span>Update</span>
      </div>
      <div className="r">
        <NavLink to='/editor'>
          <button className="tbutton">Try Now</button>
        </NavLink>
        <NavLink to='/login'> 
          <button className="tbutton">Login</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
