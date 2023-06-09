import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {

  const [sucess, setSucess] = useState(false);
  const [loading,setLoading] =useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://codestudio2124.onrender.com/auth/register", {
        firstname: fname,
        lastname: lname,
        mobileno: mno,
        email: email,
        password: password,
        cpassword: cpassword,
      })
      .then((res) => {
        if (res.status === 201) {
          setSucess(true);
          setLoading(false)
        }
      })
      .catch((e) => console.log(e));

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
                  required={true}
                />
                <input
                  type="text"
                  onChange={(e) => setLname(e.target.value)}
                  placeholder="Last Name"
                  className="in1"
                  required={true}
                />
              </div>
              <input
                className="in1"
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
              <input
                className="in1"
                type="number"
                placeholder="mobile no"
                onChange={(e) => setMno(e.target.value)}
                required={true}
              />
              <input
                className="in1"
                type="password"
                placeholder="Create Password"
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
              <input
                className="in1"
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setCpassword(e.target.value)}
                required={true}
              />
            </div>
            <button disabled={loading} className="lgbutton">Login</button>
            {sucess ? (
              <div className="success">
                <span>register success...!!!</span>
              </div>
            ) : (
              ""
            )}
          </form>

          <NavLink to="/login">
            <p className="ln">Already have an Account ? Login now</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
