import React from "react";
import "./blogs.css";
import BlogCard from "./BlogCard";
const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blog-section">
        <div className="blog-header">
          <h1>Blogs</h1>
        </div>
        <div className="blog-cards">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
