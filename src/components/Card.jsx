import React from "react";
import "./card.css";

const Card = ({ project }) => {
  
  return (
    <div className="card">
      <div className="card-box">
        <div>
          <img
            src={project.screenshot}
            alt=""
          />
        </div>
        <div className="container">
          <div className="title">
            <h2>{project.title}</h2>
          </div>
          <div className="skills-used">
            {project.skills.map((skill, index) => {
              return <p key={index}>{skill}</p>;
            })}
          </div>
          <div className="card-btn">
            <a href={project.githubLink}>
              <button>Github</button>
            </a>
            <a href={project.demoLink}>
              <button>Live Demo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
