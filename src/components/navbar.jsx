import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
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
    </div>
  )
}

export default Navbar