
import React from 'react';
import './Hero.css';
import logo from '../../assets/logo_png.png';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <nav className='container'>
        <div className="nav-logo">
          <img src={logo} alt="FoodSaver Logo" className='logo'/>
        </div>
        <ul className="nav-links">
          <li><NavLink to='/home' activeClassName="active">Home</NavLink></li>
          <li><NavLink to='/about' activeClassName="active">About</NavLink></li>
          <li><NavLink to='/loginSignup' activeClassName="active">Login</NavLink></li>
          <li><NavLink to='/contact' activeClassName="active">Contact</NavLink></li>
          <li><NavLink to='/dash' activeClassName="active">Dashboard</NavLink></li>
        </ul>
      </nav>
      
      {/* Hero Section */}
      <div className="hero-content">
        <h1 className="hero-title white-text">Welcome to <span className="highlight">FoodSaver NGO</span></h1>
        <p className="hero-description white-text">🌱 Together, we take a stand against food waste and nourish those in need. Join our mission today! 🍽</p>
        <NavLink to='/about' className="hero-button">🌍 Learn More</NavLink>
      </div>
    </div>
  );
}

export default Hero;
