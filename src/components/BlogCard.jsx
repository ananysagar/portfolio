import React from "react";
import "./blogs.css";
import admin from '../images/admin-dashboard.png'
const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="blog-card-box">
        <img src={admin} alt="" width='260px' height='155px'/>
        <div className="blog-container">
          <div className="blog-title">
            <h2>Blog title goes here</h2>
          </div>
          <div className="blog-tags">
            <p>#React</p>
            <p>Tailwind</p>
          </div>
          <div className="blog-desc">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo doloremque iusto ex. Nesciunt optio iste ut non vero accusamus labore, odit magni rerum quisquam ullam eos aspernatur doloribus eveniet vitae!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
