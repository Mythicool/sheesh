import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    "Authentic Pakistani Cuisine",
    "100% Halal Kitchen",
    "Fresh Daily Ingredients",
    "Traditional Family Recipes"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

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
        <div className="floating-spices">
          <div className="spice spice-1"></div>
          <div className="spice spice-2"></div>
          <div className="spice spice-3"></div>
          <div className="spice spice-4"></div>
          <div className="spice spice-5"></div>
        </div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className={`hero-content ${isVisible ? 'animate-in' : ''}`}>
          <div className="hero-text">
            <div className="feature-badge">
              <span className="feature-text" key={currentFeature}>
                {features[currentFeature]}
              </span>
            </div>
            
            <h1 className="hero-title">
              Taste the <span className="highlight">Heart</span> of Pakistan
            </h1>
            
            <p className="hero-description">
              Experience the rich flavors and aromatic spices of traditional Pakistani cooking. 
              Our halal kitchen serves authentic dishes made with love and the finest ingredients.
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Halal Certified</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Authentic Dishes</span>
              </div>
            </div>
            
            <div className="hero-buttons">
              <button className="btn btn-primary pulse" onClick={scrollToReservation}>
                <span>Book a Table</span>
                <div className="btn-shine"></div>
              </button>
              <button className="btn btn-outline" onClick={scrollToMenu}>
                View Menu
              </button>
            </div>
          </div>
          
          <div className="hero-info">
            <div className="info-card hours-card">
              <div className="card-icon">🕐</div>
              <h3>Opening Hours</h3>
              <p>Monday - Saturday</p>
              <p className="time">11:00 AM - 8:40 PM</p>
              <p className="closed">Sunday: Closed</p>
              <div className="status-indicator open"></div>
            </div>
            
            <div className="info-card location-card">
              <div className="card-icon">📍</div>
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