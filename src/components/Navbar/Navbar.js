
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Landing</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
      {/* <button className="get-started">Get Started</button> */}
    </nav>
  );
};

export default Navbar;
