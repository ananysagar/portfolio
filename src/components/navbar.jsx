import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdCloseCircle } from "react-icons/io";
import "./navbar.css";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="navbar">
        <div className="left-navbar">
          <div className="logo">A Sagar</div>
          <span>.</span>
        </div>
        <div className="right-navbar">
          <ul>
            <li>About Me</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Blogs</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="hamburger-icons" onClick={toggleSidebar}>
          {showSidebar ? (
            <IoMdCloseCircle className="close-icon" />
          ) : (
            <RxHamburgerMenu className="hamburger-menu" />
          )}
        </div>
        <div className="dropdown-icons" onClick={toggleDropdown}>
          {showDropdown ? (
            <IoMdCloseCircle className="dropdown-close-icon" />
          ) : (
            <RxHamburgerMenu className="dropdown-hamburger-icon" />
          )}
        </div>
      </div>
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <div className="close-btn" onClick={toggleSidebar}>
          <IoMdCloseCircle className="close-icon" />
        </div>
        <div className="sidebar-menu">
          <div className="sidebar-menu-items">
            <ul>
              <li>About Me</li>
              <li>Experience</li>
              <li>Projects</li>
              <li>Blogs</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`dropdown ${showDropdown ? "show" : ""}`}>
        <div className="dropdown-menu-items">
          <ul>
            <li>About Me</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Blogs</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
