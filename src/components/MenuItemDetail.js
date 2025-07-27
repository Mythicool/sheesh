import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { menuData } from '../data/menuData';
import './MenuItemDetail.css';

const MenuItemDetail = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  
  // Find the item across all categories
  let item = null;
  let category = null;
  
  for (const [categoryKey, items] of Object.entries(menuData)) {
    const foundItem = items.find(menuItem => menuItem.id === itemId);
    if (foundItem) {
      item = foundItem;
      category = categoryKey;
      break;
    }
  }

  if (!item) {
    return (
      <div className="menu-detail-container">
        <div className="container">
          <div className="not-found">
            <h2>Menu Item Not Found</h2>
            <Link to="/" className="btn btn-primary">Back to Menu</Link>
          </div>
        </div>
      </div>
    );
  }

  const getSpiceIndicator = (level) => {
    return '🌶️'.repeat(level) + '⚪'.repeat(5 - level);
  };

  const relatedItems = menuData[category]
    .filter(relatedItem => relatedItem.id !== item.id)
    .slice(0, 3);

  return (
    <div className="menu-detail-container">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>→</span>
          <Link to="/#menu">Menu</Link>
          <span>→</span>
          <span>{item.name}</span>
        </div>

        {/* Main Item Details */}
        <div className="item-detail-card">
          <div className="item-image-section">
            <div className="item-image-placeholder">
              <span className="item-emoji">{item.emoji}</span>
              <span className="item-icon">{item.icon}</span>
            </div>
          </div>

          <div className="item-info-section">
            <div className="item-header">
              <h1>{item.name} {item.emoji}</h1>
              <div className="price-badge">{item.price}</div>
            </div>

            <p className="item-description">{item.longDescription || item.description}</p>

            <div className="item-stats">
              <div className="stat-item">
                <span className="stat-icon">🌶️</span>
                <div>
                  <strong>Spice Level</strong>
                  <div className="spice-indicator">{getSpiceIndicator(item.spiceLevel || 2)}</div>
                </div>
              </div>

              <div className="stat-item">
                <span className="stat-icon">⏱️</span>
                <div>
                  <strong>Cooking Time</strong>
                  <span>{item.cookingTime || '30 mins'}</span>
                </div>
              </div>

              <div className="stat-item">
                <span className="stat-icon">👥</span>
                <div>
                  <strong>Serving Size</strong>
                  <span>{item.servingSize || '2 people'}</span>
                </div>
              </div>

              <div className="stat-item">
                <span className="stat-icon">🔥</span>
                <div>
                  <strong>Calories</strong>
                  <span>{item.calories || 400} kcal</span>
                </div>
              </div>
            </div>

            {item.ingredients && (
              <div className="ingredients-section">
                <h3>🥘 Ingredients</h3>
                <div className="ingredients-list">
                  {item.ingredients.map((ingredient, index) => (
                    <span key={index} className="ingredient-tag">
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {item.allergens && item.allergens.length > 0 && (
              <div className="allergens-section">
                <h3>⚠️ Allergens</h3>
                <div className="allergens-list">
                  {item.allergens.map((allergen, index) => (
                    <span key={index} className="allergen-tag">
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="action-buttons">
              <a href="tel:(405) 778-8469" className="btn btn-primary">
                📞 Order Now: (405) 778-8469
              </a>
              <button onClick={() => navigate(-1)} className="btn btn-secondary">
                ← Back
              </button>
            </div>
          </div>
        </div>

        {/* Related Items */}
        {relatedItems.length > 0 && (
          <div className="related-items">
            <h2>🍽️ You Might Also Like</h2>
            <div className="related-items-grid">
              {relatedItems.map((relatedItem) => (
                <Link 
                  key={relatedItem.id} 
                  to={`/menu/${relatedItem.id}`}
                  className="related-item-card"
                >
                  <div className="related-item-image">
                    <span className="related-emoji">{relatedItem.emoji}</span>
                    <span className="related-icon">{relatedItem.icon}</span>
                  </div>
                  <div className="related-item-info">
                    <h4>{relatedItem.name}</h4>
                    <p>{relatedItem.description}</p>
                    <span className="related-price">{relatedItem.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItemDetail;