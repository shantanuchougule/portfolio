import React from 'react';
import './Header.css';
import profilepic from "../assets/images/shantanu-bg.png";

function Header() {
  return (
    <section id="header">
      <header className="hero-section">
        <div className="header-content">
          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/shantanuchougule" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/shantanuchougule" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/shantanuchougule7595/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:shantanuchougule7595@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          {/* Header Text */}
          <div className="header-text">
            <h1>I,m Shantanu Chougule</h1>
            <p>Welcome to my portfolio!</p>
            <a className="btn btn-primary" href="/ShantanuChouguleResume.pdf" download="ShantanuChouguleResume.pdf">
              DOWNLOAD CV
            </a>

          </div>

          {/* Profile Picture */}
          <div className="profile-pic">
            <img src={profilepic} alt="Profile Picture" />
          </div>
        </div>
      </header>
    </section>
  );
}

export default Header;
