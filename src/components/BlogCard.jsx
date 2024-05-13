import React from "react";
import "./blogs.css";

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-box">
        <img src={blog.screenshot} alt="" width="260px" height="155px" />
        <div className="blog-container">
          <div className="blog-title">
            <h2>{blog.title}</h2>
          </div>
          <div className="blog-tags">
            {blog.tags.map((tag) => {
              return <p>{tag}</p>;
            })}
          </div>
          <div className="blog-desc">
            <p>{blog.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
