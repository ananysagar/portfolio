import React from "react";
import "./skills.css";
import SkillsIcon from "./SkillsIcon";
const Skills = () => {
  return (
    <div className="skills">
      <div className="skill-section">
        <div className="skill-header">
          <h1>Skills</h1>
        </div>
        <div className="skills-icon">
          <SkillsIcon />
        </div>
      </div>
    </div>
  );
};

export default Skills;
