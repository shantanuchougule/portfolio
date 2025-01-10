import React from "react";
import "./Contact.css"; // Import the custom CSS file
import Footer from './Footer';

const Contact = () => {
  return (
    <div className="contact-section">
      <h2 className="contact-title text-center">Get in touch</h2>
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="form-input"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="form-input"
          />
          <textarea
            placeholder="Enter Your Message"
            className="form-input"
            rows="5"
          ></textarea>
          <a className="mail" href="mailto:shantanuchougule7595@gmail.com"><i className="fas fa-paper-plane send-icon"></i> SEND
           </a>
        </form>
      </div><Footer /> 
          </div>
  );
};

export default Contact;
