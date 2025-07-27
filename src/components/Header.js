import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'menu', 'chefs', 'testimonials', 'reservation'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-icon">🏛️</div>
            <div className="logo-text">
              <h1>Sheesh Mahal</h1>
              <span>Authentic Indian Cuisine</span>
            </div>
          </Link>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <a 
              href="#home" 
              onClick={() => scrollToSection('home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => scrollToSection('about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </a>
            <a 
              href="#menu" 
              onClick={() => scrollToSection('menu')}
              className={activeSection === 'menu' ? 'active' : ''}
            >
              Menu
            </a>
            <a 
              href="#chefs" 
              onClick={() => scrollToSection('chefs')}
              className={activeSection === 'chefs' ? 'active' : ''}
            >
              Chefs
            </a>
            <a 
              href="#testimonials" 
              onClick={() => scrollToSection('testimonials')}
              className={activeSection === 'testimonials' ? 'active' : ''}
            >
              Reviews
            </a>
            <a 
              href="#reservation" 
              onClick={() => scrollToSection('reservation')}
              className={activeSection === 'reservation' ? 'active' : ''}
            >
              Reservation
            </a>
          </nav>

          <div className="header-actions">
            <a href="tel:(405) 778-8469" className="phone-link">
              <span className="phone-icon">📞</span>
              <span className="phone-number">(405) 778-8469</span>
            </a>
            <button 
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;