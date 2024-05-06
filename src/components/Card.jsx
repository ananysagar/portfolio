import React from "react";
import "./card.css";
import admin from '../images/admin-dashboard.png'
const Card = () => {
  return (
    <div className="card">
      <div className="card-box">
        <img src={admin} alt="" />
        <div className="container">
          <div className="title">
            <h2>My Portfolio</h2>
          </div>
          <div className="skills-used">
            <p>React</p>
            <p>CSS</p>
          </div>
          <div className="card-btn">
            <button>Github</button>
            <button>Live Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
