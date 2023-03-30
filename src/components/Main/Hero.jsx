import React from "react";
import main from '../../Assets/main.jpg'
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero">
      <div className="lef">
        <h1>code edit and save</h1>
        <p>Free open source and online code editor</p>
        <button className="lgbutton">try it now</button>
      </div>
      <div className="righ">
        <img className="her" src={main} alt="main" />
      </div>
    </div>
  );
};

export default Hero;
