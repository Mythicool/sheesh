import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('popular');

  const menuItems = {
    popular: [
      {
        name: "Chicken Biryani",
        price: "$12.99",
        description: "Aromatic basmati rice cooked with tender chicken and traditional spices"
      },
      {
        name: "Lamb Karahi",
        price: "$15.99",
        description: "Tender lamb cooked in a traditional karahi with tomatoes and spices"
      },
      {
        name: "Butter Chicken",
        price: "$13.99",
        description: "Creamy tomato-based curry with tender chicken pieces"
      },
      {
        name: "Seekh Kebab",
        price: "$11.99",
        description: "Grilled minced meat kebabs seasoned with herbs and spices"
      }
    ],
    vegetarian: [
      {
        name: "Aloo Gobi (Cauliflower)",
        price: "$9.99",
        description: "A potato and cauliflower curry with aromatic spices"
      },
      {
        name: "Chana Masala (Chickpea)",
        price: "$9.99",
        description: "A chickpea curry cooked in traditional spices"
      },
      {
        name: "Bindi Masala (Okra)",
        price: "$9.99",
        description: "An okra cooked with onions and traditional spices"
      },
      {
        name: "Mixed Vegetable",
        price: "$9.99",
        description: "A mixed vegetables cooked with aromatic spices"
      },
      {
        name: "Palak Paneer",
        price: "$10.99",
        description: "Fresh spinach curry with cottage cheese cubes"
      }
    ],
    breads: [
      {
        name: "Naan Bread",
        price: "$2.99",
        description: "Traditional clay oven baked bread"
      },
      {
        name: "Garlic Naan",
        price: "$3.49",
        description: "Naan bread topped with fresh garlic and herbs"
      },
      {
        name: "Roti",
        price: "$2.49",
        description: "Whole wheat flatbread cooked on griddle"
      },
      {
        name: "Paratha",
        price: "$3.99",
        description: "Layered flatbread cooked with ghee"
      }
    ]
  };

  const categories = [
    { id: 'popular', name: 'Popular Dishes' },
    { id: 'vegetarian', name: 'Vegetarian' },
    { id: 'breads', name: 'Breads' }
  ];

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
              {category.name}
            </button>
          ))}
        </div>

        <div className="menu-items">
          {menuItems[activeCategory].map((item, index) => (
            <div key={index} className="menu-item">
              <div className="item-info">
                <div className="item-header">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p className="description">{item.description}</p>
              </div>
            </div>
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