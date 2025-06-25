import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Crickzo Logo" className="logo" />
        <span className="title">Crickzo</span>
      </div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/fixtures">Fixtures</Link>
        <Link to="/news">News</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
