import React from 'react'
import { NavLink } from 'react-router-dom'


const RegisterPage = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
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
                <input type="text" name="" id="" className="in1" placeholder='FirstName'/>
                <input type="text" name="" id="" placeholder='Last Name' className="in1" />
            </div>
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
              placeholder="Create Password"
              id=""
            />
            <input
              className="in1"
              type="password"
              name=""
              placeholder="Confirm Password"
              id=""
            />
            <input className='in1' type="number" name="" id="" placeholder='mobile no' />
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
  )
}

export default RegisterPage