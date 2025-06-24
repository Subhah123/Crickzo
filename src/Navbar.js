import React from 'react';
import './Navbar.css'; // optional styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="/logo.png"
          alt="Crickzo"
          style={{
            height: "45px",
            width: "45px",
            borderRadius: "50%",
            objectFit: "cover"
          }}
        />
        <span className="brand-name">Crickzo</span>
      </div>
      <div className="navbar-right">
        <a href="#">Home</a>
        <a href="#">Live</a>
        <a href="#">Fixtures</a>
        <a href="#">News</a>
        <a href="#">About</a>
      </div>
    </nav>
  );
}

export default Navbar;
