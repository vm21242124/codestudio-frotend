import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mno, setMno] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
 
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
              <div className="name">
                <input
                  type="text"
                  onChange={(e) => setFname(e.target.value)}
                  className="in1"
                  placeholder="FirstName"
                />
                <input
                  type="text"
                  onChange={(e) => setLname(e.target.value)}
                  placeholder="Last Name"
                  className="in1"
                />
              </div>
              <input
                className="in1"
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="in1"
                type="number"
                placeholder="mobile no"
                onChange={(e) => setMno(e.target.value)}
              />
              <input
                className="in1"
                type="password"
                placeholder="Create Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="in1"
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setCpassword(e.target.value)}
              />
            </div>
            <button className="lgbutton">Login</button>
          </form>

          <NavLink to="/login">
            <p className="ln">Not have an Account ? Register now</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
