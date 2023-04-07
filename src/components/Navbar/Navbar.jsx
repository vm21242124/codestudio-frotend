import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import {useDispatch, useSelector } from "react-redux";
const Navbar = () => {
  const user = useSelector(state=>state.user.user)
  const dispatch=useDispatch();
  const removeuser = () => {
    dispatch({
      type: "removeuser",
    });
  };
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
          <button onClick={removeuser} className="tbutton">{user?"Logout":"Login"}</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
