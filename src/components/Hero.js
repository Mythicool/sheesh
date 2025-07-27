import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Authentic <span className="highlight">Pakistani</span> Cuisine
            </h1>
            <p>
              Experience the rich flavors and aromatic spices of traditional Pakistani cooking. 
              Our halal kitchen serves authentic dishes made with love and the finest ingredients.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToReservation}>
                Book a Table
              </button>
              <button className="btn btn-outline" onClick={scrollToMenu}>
                View Menu
              </button>
            </div>
          </div>
          
          <div className="hero-info">
            <div className="info-card">
              <h3>Opening Hours</h3>
              <p>Monday - Saturday</p>
              <p className="time">11:00 AM - 8:40 PM</p>
              <p className="closed">Sunday: Closed</p>
            </div>
            
            <div className="info-card">
              <h3>Location</h3>
              <p>4621 N May Ave</p>
              <p>Oklahoma City, OK 73112</p>
              <p className="phone">(405) 778-8469</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;