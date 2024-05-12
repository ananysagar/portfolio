import React from "react";
import "./aboutme.css";
import image from "../images/image.jpg";
//import resume from '../images/resume.jpeg';
import { FaLaptopCode } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";

const Aboutme = () => {
  return (
    <div className="aboutme">
      <h1>About Me</h1>
      <div className="aboutme-section">
        <div className="secondPic">
          <img src={image} alt="" width="350px" />
        </div>
        <div className="personal-info">
          <div className="my-bio">
            <div className="experience">
              <div className="edu-icon">
                <FaLaptopCode className="icon" />
              </div>
              <h3 className="heading1">Experience</h3>
              <h5 className="heading2">3.6+ years</h5>
              <h6 className="heading3">Frontend Development</h6>
            </div>
            <div className="education">
              <div className="exp-icon">
                <IoSchoolSharp className="icon" />
              </div>
              <h3 className="heading1">Education</h3>
              <h5 className="heading2">Bachelor of Engineering</h5>
              <h6 className="heading3">Information Science</h6>
            </div>
          </div>
          <div className="my-intro">
            <p>
              fewfdewdf wedewfd ewfc wefchwekdf hcewh fwe fhefhkwehkfhf fkhkehfk
              ekfhkehfkhekrfhegfcikk h wehflh wekfhwehf vkefkwe knwekfkwen nwen
              we n
            </p>
          </div>
          <div className="cv-btn-wrapper">
            <div className="cv-btn">
              <a href='' /*download={resume}*/><button>Download CV</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
