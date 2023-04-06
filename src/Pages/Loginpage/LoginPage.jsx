import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./LoginPage.css";
import { useDispatch } from "react-redux";
import axios from "axios";

const LoginPage = () => {
  const dispatch = useDispatch();
  const adduser = (user) => {
    dispatch({
      type: "setuser",
      payload: user,
    });
  };
  const removeuser = () => {
    dispatch({
      type: "removeuser",
    });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5000/auth/login", { email:email, password:password})
      .then((res)=>{
        if(res.status===200){
          alert("user logged in")
        }

      })
      .catch((e) => console.log(e));
    adduser(email);
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
