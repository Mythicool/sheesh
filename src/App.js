import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import MenuItemDetail from './components/MenuItemDetail';
import Chefs from './components/Chefs';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Menu />
              <Chefs />
              <Testimonials />
              <Reservation />
            </>
          } />
          <Route path="/menu/:itemId" element={<MenuItemDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;