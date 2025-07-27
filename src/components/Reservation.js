import React, { useState } from 'react';
import './Reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Reservation submitted:', formData);
    alert('Thank you for your reservation request! We will contact you shortly to confirm.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <section id="reservation" className="section reservation">
      <div className="reservation-background">
        <div className="reservation-overlay"></div>
      </div>
      
      <div className="container">
        <div className="section-title">
          <h2>Book A Table</h2>
          <p className="subtitle">Reserve Your Table</p>
        </div>

        <div className="reservation-content">
          <div className="reservation-info">
            <h3>Opening Hours</h3>
            <p className="hours-subtitle">8:00 AM - 10:00 PM Every day of the week</p>
            
            <div className="hours-list">
              <div className="day-hours">
                <span className="day">Monday - Saturday</span>
                <span className="hours">11:00 AM - 8:40 PM</span>
              </div>
              <div className="day-hours closed">
                <span className="day">Sunday</span>
                <span className="hours">Closed</span>
              </div>
            </div>

            <div className="contact-info">
              <div className="contact-item">
                <span className="icon">📍</span>
                <div>
                  <p>4621 N May Ave</p>
                  <p>Oklahoma City, OK 73112</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="icon">📞</span>
                <div>
                  <p>(405) 778-8469</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="icon">✉️</span>
                <div>
                  <p>info@sheeshmahalrestaurant.us</p>
                </div>
              </div>
            </div>
          </div>

          <form className="reservation-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="time"
                  name="time"
                  placeholder="Preferred Time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Special Requests or Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Book A Table
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;