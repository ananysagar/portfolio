import React from "react";
import "./project.css";
import Card from "./Card";
import data from "../assets/ProjectData.json";
const Project = () => {
  return (
    <div className="project">
      <div className="project-section">
        <div className="project-header">
          <h1>Projects</h1>
        </div>
        <div className="project-cards">
          {data.projects.map((project) => {
            return <Card key={project.id} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
