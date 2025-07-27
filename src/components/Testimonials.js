import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Hope Coen Knowles",
      rating: 5,
      text: "Food was delicious! We will definitely be back! Staff was friendly and helpful! Great food · Cosy atmosphere · Casual · Large portions"
    },
    {
      name: "Stephanie Lauk",
      rating: 5,
      text: "I loved the food. Everything was delicious and reminded me of my trip to Pakistan. I tried the Chicken Biryani, Papri Chaat, Palak paneer, and Naan bread."
    },
    {
      name: "Troy Thevis",
      rating: 5,
      text: "Great staff, all the workers are friendly and will make sure you are taken care of. The food is great and it is at a fair price. Best Indian and Pakistani food in Oklahoma."
    },
    {
      name: "Lissa Dobson",
      rating: 5,
      text: "Amazing food. Fantastic customer service. I will absolutely be coming back."
    },
    {
      name: "Nina H. Haggard",
      rating: 5,
      text: "The food was amazing and the service was outstanding!"
    },
    {
      name: "Natalie Stout Tucker",
      rating: 5,
      text: "Sheesh Mahal is one of my favorite restaurants in OKC! After going just one time you will surely crave the delicious, exotic spices again. There's always great service and when dining in they give you a ginger tea drink which is always a delight!"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section id="testimonials" className="section testimonials">
      <div className="testimonials-background">
        <div className="testimonials-overlay"></div>
      </div>
      
      <div className="container">
        <div className="section-title">
          <h2>Our Valuable Clients</h2>
          <p className="subtitle">What People Say About Us</p>
        </div>

        <div className="testimonials-content">
          <div className="restaurant-image">
            <div className="image-placeholder">
              <div className="image-content">
                <h3>Visit Our Restaurant</h3>
                <p>Experience authentic Pakistani cuisine in a warm, welcoming atmosphere</p>
              </div>
            </div>
          </div>

          <div className="testimonials-slider">
            <h3>Our Clients Say</h3>
            <p className="slider-subtitle">What Client Say</p>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="customer-info">
                  <div className="customer-avatar">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="customer-details">
                    <h4>{testimonials[currentTestimonial].name}</h4>
                    <div className="rating">
                      {renderStars(testimonials[currentTestimonial].rating)}
                    </div>
                  </div>
                </div>
                <p className="testimonial-text">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>
            </div>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;