import React from "react";
import "./Hero.css";
import gitimg from "../../assets/github.png";
import linkdinimg from "../../assets/linkedin.png";
import htmlimg from "../../assets/html-5.png";
import cssimg from "../../assets/css-3.png";
import jsimg from "../../assets/js.png";
import bootstarpimg from "../../assets/bootstrap.png";
import gptimg from "../../assets/chatgpt.png";
import reactimg from "../../assets/react.png";
import codeimg from '../../assets/code.png'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left-side">
        <div className="text">
          <h1>Front-End developer</h1> 
          <p>
            Hey there, I'm <b>Ankit Sharma</b>, a dedicated <i> Front-End developer </i>with a
            creative spark, thriving in the vibrant India scene
          </p>
        </div>
        <div className="social-media">
          <img src={gitimg} width={"25px"} alt="" />
          <img src={linkdinimg} width={"25px"} alt="" />
        </div>
        <div className="languages">
          <p>Tech Stock:</p>
          <img src={htmlimg} alt="" />
          <img src={cssimg} alt="" />
          <img src={jsimg} alt="" />
          <img src={reactimg} alt="" />
          <img src={bootstarpimg} alt="" />
          <img src={gptimg} alt="" />
        </div>
      </div>
      <div className="hero-right-side">
        <img src={codeimg}  alt="" />
      </div>
    </div>
  );
};

export default Hero;
