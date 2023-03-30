import React from "react";
import { NavLink } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefualt();
  };
  return (
    <div className="loginpage">
      <div className="container">
        <div className="left">
          <h1 className="brand">VM2124</h1>
          <p>code with vm2124 </p>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <div className="frm">
              <input
                className="in1"
                type="email"
                placeholder="email"
                name=""
                id=""
              />
              <input
                className="in1"
                type="password"
                name=""
                placeholder="password"
                id=""
              />
            </div>
            <button className="lgbutton">Login</button>
          </form>
          <NavLink>
            <p className="ln">Forgot Password</p>
            <NavLink to="/register"></NavLink>
            <p className="ln">Not have an Account ? Register now</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
