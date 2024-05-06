import React from "react";
import "./contactus.css";

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
              <span>Email:</span> sagaranany577@gmail.com
            </p>
            <p>
              <span>Phone:</span> +91 8310499491
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
      </div>
    </div>
  );
};

export default ContactUs;