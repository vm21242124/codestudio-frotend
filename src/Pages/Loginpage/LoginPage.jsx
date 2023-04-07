import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useDispatch } from "react-redux";
import axios from "axios";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [loading,setLoading] =useState(false)
  const adduser = (user) => {
    dispatch({
      type: "setuser",
      payload: user,
    });
  };
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    axios
      .post("https://codestudio2124.onrender.com/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if(res.status===200){
          adduser(res.data);
          
          nav('/')
        }
      })
      .catch((e) => console.log(e));
      setLoading(false)
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
                required={true}
              />
              <input
                className="in1"
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
            </div>
            <button disabled={loading} className="lgbutton">Login</button>
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
