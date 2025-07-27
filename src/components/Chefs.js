import React from 'react';
import './Chefs.css';

const Chefs = () => {
  const chefs = [
    {
      name: "Shamsa Perveen",
      role: "Head Chef",
      description: "Leading our kitchen with over 15 years of experience in Pakistani cuisine"
    },
    {
      name: "Qasim Bin Naeem",
      role: "Grill & Naan Chef",
      description: "Master of tandoor cooking and traditional bread making"
    },
    {
      name: "Nirmal Malla",
      role: "Grill & Naan Chef",
      description: "Expert in grilled specialties and authentic naan preparation"
    },
    {
      name: "Sushma Malla",
      role: "Food Tester",
      description: "Ensuring every dish meets our high standards of taste and quality"
    }
  ];

  return (
    <section id="chefs" className="section chefs">
      <div className="container">
        <div className="section-title">
          <h2>Our Expert Chefs</h2>
          <p className="subtitle">Professional Cook Team</p>
        </div>

        <div className="chefs-grid">
          {chefs.map((chef, index) => (
            <div key={index} className="chef-card">
              <div className="chef-image">
                <div className="chef-placeholder">
                  <div className="chef-initial">
                    {chef.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>
              
              <div className="chef-info">
                <h3>{chef.name}</h3>
                <p className="role">{chef.role}</p>
                <p className="description">{chef.description}</p>
                
                <div className="chef-social">
                  <button type="button" aria-label="Facebook">📘</button>
                  <button type="button" aria-label="Twitter">🐦</button>
                  <button type="button" aria-label="Instagram">📷</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs;