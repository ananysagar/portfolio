import React from "react";
import "./blogs.css";
import BlogCard from "./BlogCard";
import BlogData from "../assets/BlogData";

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blog-section">
        <div className="blog-header">
          <h1>Blogs</h1>
        </div>
        <div className="blog-cards">
          {BlogData.map((blog) => {
            return <BlogCard key={blog.id} blog={blog} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
