import React from "react";
import "./project.css";
import Card from "./Card";
const Project = () => {
  return (
    <div className="project">
      <div className="project-section">
        <div className="project-header">
          <h1>Projects</h1>
        </div>
        <div className="project-cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Project;
