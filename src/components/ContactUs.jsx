import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import "./contactus.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_yfoaq0d";
    const templateId = "template_ts50xw6";
    const publicKey = "-venQv-yZPlJDxsMJ";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Anany Sagar",
      message: message,
    };
    
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        //console.log("Email sent successfully", response);
        toast.success("Email sent successfully!");
        setName('');
        setEmail('');
        setMessage('');
      });
  };

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
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="name">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    className="contact-input"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="email">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    className="contact-input"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="msg-area">
                <textArea
                  name="message"
                  placeholder="Your Message"
                  className="contact-input"
                  value={message}
                  required
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button className="send-btn" type="submit">
                Send
              </button>
              <ToastContainer />
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
