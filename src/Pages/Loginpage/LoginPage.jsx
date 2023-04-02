import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./LoginPage.css";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const dispatch=useDispatch();
  const adduser=(user)=>{
    dispatch({
      type:"setuser",
      payload:user
    })
  }
  const removeuser =()=>{
    dispatch({
      type:'removeuser'
    })
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    adduser(password);
  };
  return (
    <div className="loginpage">
      <div className="container">
        <div className="left">
          <h1 className="brand">VMstudio</h1>
          <p>code with vm2124 </p>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <div className="frm">
              <input
                className="in1"
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="in1"
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="lgbutton">Login</button>
          </form>
            <button onClick={removeuser}>logout</button>
          <NavLink>
            <p className="ln">Forgot Password</p>
          </NavLink>
          <NavLink to="/register">
            <p className="ln">Not have an Account ? Register now</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
