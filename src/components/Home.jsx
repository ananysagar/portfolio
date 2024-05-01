import React from "react";
import "./home.css";

// ** icons import
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import image from '../images/image.jpg'
const Home = () => {
  return (
    <div className="home">
      <div className="socials">
            <a href="www.github.com/ananysagar" className="icons github-icon"><FaGithub /></a>
            <a href="www.linkedin.com/in/ananysagar" className="icons linkedin-icon"><FaLinkedin /></a>
            <a href="www.x.com/ananysagar" className="icons twitter-icon"><FaXTwitter /></a>

      </div>
      <div className="short-intro">
        <h1>Anany Sagar</h1>
        <div className="designation">
            <span className="horizontal-line"></span>
            <h4>Frontend Developer</h4>
            <span className="horizontal-line"></span>
        </div>
        <p>I am a frontend developer based in Bangalore and I am very mush passionate about my work.
        I am a frontend developer based in Bangalore and I am very mush passionate about my work.
        I am a frontend developer based in Bangalore and I am very mush passionate about my work.
        I am a frontend developer based in Bangalore and I am very mush passionate about my work.
        </p>
      </div>
      <div className="my-pic">
        <img src={image} alt="" width='300px'/>
      </div>
    </div>
  );
};

export default Home;
