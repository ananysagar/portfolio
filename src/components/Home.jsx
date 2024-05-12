import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
// ** icons import
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import image from "../images/image.jpg";
const Home = () => {
  return (
    <div className="home">
      <div className="socials">
        <Link to="https://github.com/ananysagar" target="_blank" className="icons github-icon">
          <FaGithub />
        </Link>
        <Link
          to="https://linkedin.com/in/ananysagar" target="_blank"
          className="icons linkedin-icon"
        >
          <FaLinkedin />
        </Link>
        <Link to="https://x.com/ananysagar" target="_blank" className="icons twitter-icon">
          <FaXTwitter />
        </Link>
      </div>
      <div className="short-intro">
        <h1>Anany Sagar</h1>
        <div className="designation">
          <span className="horizontal-line"></span>
          <h4>Frontend Developer</h4>
          <span className="horizontal-line"></span>
        </div>
        <p>
          I am a frontend developer based in Bangalore and I am very mush
          passionate about my work. I am a frontend developer based in Bangalore
          and I am very mush passionate about my work. I am a frontend developer
          based in Bangalore and I am very mush passionate about my work. I am a
          frontend developer based in Bangalore and I am very mush passionate
          about my work.
        </p>
      </div>
      <div className="my-pic">
        <img src={image} alt="" width="350px" />
      </div>
    </div>
  );
};

export default Home;
