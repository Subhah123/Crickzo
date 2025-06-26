import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Crickzo Logo" />
        <span>Crickzo</span>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/fixtures">Fixtures</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
