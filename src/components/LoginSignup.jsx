
import React, { useState } from 'react';
import '../css/LoginSignup.css';
import { Link } from 'react-router-dom';

const LoginSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    const userData = { name, email, password };
    localStorage.setItem("token-info", JSON.stringify(userData));

    setIsLogged(true);
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleLogout = () => {
    localStorage.removeItem("token-info");
    setIsLogged(false);
  };

  return (
    <div className="login-container enhanced-background">
      {!isLogged ? (
        <div className="login-box animated-box shadow-box">
          <h2 className="login-title gradient-text">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="btn neon-btn glow-effect">Login</button>
          </form>
        </div>
      ) : (
        <div className="welcome-box animated-box shadow-box">
          <h2 className="welcome-title gradient-text">Welcome, {name}!</h2>
          <p className="welcome-text">You are successfully logged in. Explore your dashboard!</p>
          <Link to='/dash'>
            <button className="btn dashboard-btn neon-btn glow-effect" onClick={handleLogout}>Go to Dashboard</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LoginSignup;