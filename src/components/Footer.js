import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Sheesh Mahal Restaurant</h3>
            <p>Authentic halal Pakistani cuisine served with passion and tradition. Experience the rich flavors and aromatic spices that make our dishes truly special.</p>
            
            <div className="social-links">
              <a href="https://www.facebook.com/sheeshmahal4621" target="_blank" rel="noopener noreferrer">
                📘 Facebook
              </a>
              <a href="https://www.instagram.com/sheesh_mahal_okc/" target="_blank" rel="noopener noreferrer">
                📷 Instagram
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <div className="contact-details">
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>4621 N May Ave, Oklahoma City, OK 73112</span>
              </div>
              
              <div className="contact-item">
                <span className="icon">📞</span>
                <a href="tel:(405) 778-8469">(405) 778-8469</a>
              </div>
              
              <div className="contact-item">
                <span className="icon">✉️</span>
                <a href="mailto:info@sheeshmahalrestaurant.us">info@sheeshmahalrestaurant.us</a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3>We are Open</h3>
            <div className="opening-hours">
              <div className="hour-item">
                <span className="day">Monday</span>
                <span className="time">11AM - 8:40PM</span>
              </div>
              <div className="hour-item">
                <span className="day">Tuesday</span>
                <span className="time">11AM - 8:40PM</span>
              </div>
              <div className="hour-item">
                <span className="day">Wednesday</span>
                <span className="time">11AM - 8:40PM</span>
              </div>
              <div className="hour-item">
                <span className="day">Thursday</span>
                <span className="time">11AM - 8:40PM</span>
              </div>
              <div className="hour-item">
                <span className="day">Friday</span>
                <span className="time">11AM - 8:40PM</span>
              </div>
              <div className="hour-item">
                <span className="day">Saturday</span>
                <span className="time">11AM - 8:40PM</span>
              </div>
              <div className="hour-item closed">
                <span className="day">Sunday</span>
                <span className="time">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Sheesh Mahal Restaurant. All Rights Reserved.</p>
          <button className="scroll-to-top" onClick={scrollToTop}>
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;