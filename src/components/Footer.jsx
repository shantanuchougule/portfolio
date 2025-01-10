import React from 'react';
import './Footer.css'; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/shantanuchougule" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/shantanuchougule" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/shantanuchougule7595/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://wa.me/7030366878" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://x.com/Shantanu7595" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="mailto:shantanuchougule7595@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <h2 className="developer text-center">developed by shantanu chougule</h2>
      <p>© 2025 Shantanu Chougule. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
