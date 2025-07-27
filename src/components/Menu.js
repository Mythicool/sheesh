import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuData, categories } from '../data/menuData';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('goatBeef');

  return (
    <section id="menu" className="section menu">
      <div className="container">
        <div className="section-title">
          <h2>Our Menu</h2>
          <p className="subtitle">Authentic Pakistani Flavors</p>
        </div>

        <div className="menu-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-emoji">{category.emoji}</span>
              {category.name}
              <span className="category-icon">{category.icon}</span>
            </button>
          ))}
        </div>

        <div className="category-description">
          <p>{categories.find(cat => cat.id === activeCategory)?.description}</p>
        </div>

        <div className="menu-items">
          {menuData[activeCategory].map((item) => (
            <Link 
              key={item.id} 
              to={`/menu/${item.id}`}
              className="menu-item"
            >
              <div className="item-visual">
                <span className="item-emoji">{item.emoji}</span>
                <span className="item-icon">{item.icon}</span>
              </div>
              <div className="item-info">
                <div className="item-header">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p className="description">{item.description}</p>
                <div className="item-meta">
                  <span className="spice-level">
                    {'🌶️'.repeat(item.spiceLevel || 2)}
                    {'⚪'.repeat(5 - (item.spiceLevel || 2))}
                  </span>
                  <span className="cooking-time">⏱️ {item.cookingTime || '30 mins'}</span>
                </div>
              </div>
              <div className="item-arrow">→</div>
            </Link>
          ))}
        </div>

        <div className="menu-footer">
          <p>All dishes are prepared with halal ingredients</p>
          <a href="tel:(405) 778-8469" className="btn btn-primary">
            Call to Order: (405) 778-8469
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;