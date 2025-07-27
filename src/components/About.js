import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-title">
              <h2>About Sheesh Mahal</h2>
              <p className="subtitle">Authentic Halal Pakistani Cuisine</p>
            </div>
            
            <div className="about-description">
              <p>
                Welcome to Sheesh Mahal Restaurant, where we bring you the authentic flavors 
                of Pakistan right here in Oklahoma City. Our kitchen specializes in traditional 
                halal Pakistani cuisine, prepared with the finest spices and ingredients.
              </p>
              
              <p>
                From aromatic biryanis to tender kebabs, from rich curries to fresh naan bread, 
                every dish is crafted with passion and authenticity. Our experienced chefs use 
                time-honored recipes passed down through generations.
              </p>
              
              <div className="features">
                <div className="feature">
                  <div className="feature-icon">🥘</div>
                  <h4>Authentic Recipes</h4>
                  <p>Traditional Pakistani dishes made with authentic spices and techniques</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">🥩</div>
                  <h4>100% Halal</h4>
                  <p>All our meat is certified halal, ensuring quality and religious compliance</p>
                </div>
                
                <div className="feature">
                  <div className="feature-icon">👨‍🍳</div>
                  <h4>Expert Chefs</h4>
                  <p>Our skilled chefs bring years of experience in Pakistani cuisine</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              <div className="image-content">
                <h3>Experience the Taste of Pakistan</h3>
                <p>Rich flavors, aromatic spices, and authentic cooking methods</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;