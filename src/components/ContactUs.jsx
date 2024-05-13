import React from "react";
import { Link } from "react-router-dom";

import "./contactus.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className="contact">
      <div className="contact-section">
        <div className="contact-header">
          <h1>Contact Me</h1>
        </div>
        <div className="my-form">
          <div className="contact-detail">
            <h1>Get in touch</h1>
            <p>
              <span>Email: </span>sagaranany577@gmail.com
            </p>
            <p>
              <span>Phone: </span>+91 8310499491
            </p>
          </div>
          <div className="contact-form">
            <form action="" className="form">
              <div className="form-group">
                <div className="name">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="contact-input"
                    required
                  />
                </div>
                <div className="email">
                  <input
                    type="email"
                    placeholder="Email"
                    name="name"
                    className="contact-input"
                    required
                  />
                </div>
              </div>
              <div className="msg-area">
                <textArea
                  name="message"
                  placeholder="Your Message"
                  className="contact-input"
                  required
                />
              </div>
              <button className="send-btn">Send</button>
            </form>
          </div>
        </div>
        <div className="footer-msg">
          <div className="social">
            <Link
              to="https://github.com/ananysagar"
              target="_blank"
              className="footer-icons"
            >
              <FaGithub />
            </Link>
            <Link
              to="https://linkedin.com/in/ananysagar"
              target="_blank"
              className="footer-icons"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://x.com/ananysagar"
              target="_blank"
              className="footer-icons"
            >
              <FaXTwitter />
            </Link>
          </div>
          <div className="copyright-msg">
            <p>Copyright © 2024 Anany Sagar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
