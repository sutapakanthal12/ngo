
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="logo" color='#008080'>🍽 <span className="highlight" style={{ color: '#008080' }}>FoodSaver NGO</span></h1>
          <nav className="nav-buttons">
            <Link to="/dash" className="nav-link">
              <button className="donate-button" >💖 Donate</button>
            </Link>
            <button className="home-button" onClick={() => navigate('/')}>🏠 Home</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">🥗 Ending Food Waste. Nourishing Lives.</h2>
          <p className="hero-description">
            <strong>Join us</strong> in our mission to fight food waste and provide meals to those in need.
            We work with businesses, volunteers, and donors to rescue surplus food and distribute it where it's needed most.
          </p>
          <Link to="/contact" className="hero-link">
            <button className="join-button">🤝 Get Involved</button>
          </Link>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4" 
            alt="Food Donation"
            className="responsive-image shadow-effect"
          />
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <h2 className="section-title">🚀 How You Can Help</h2>
        <div className="info-cards">
          {[
            { title: "🌍 Our Mission", text: "We strive to create a sustainable solution to food waste while feeding the hungry." },
            { title: "🤲 Volunteer With Us", text: "Your time and effort can make a difference. Join our team today!" },
            { title: "📖 Impact Stories", text: "See how rescued food is changing lives in communities across the country." }
          ].map((card, index) => (
            <div key={index} className="info-card stylish-card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 <span className="footer-highlight" style={{ color: '#ff5733' }}>FoodSaver NGO</span> | Making the world a better place, one meal at a time.</p>
      </footer>
    </div>
  );
};

export default Home;