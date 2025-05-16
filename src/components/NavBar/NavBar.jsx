import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <h1>Anvara Joyas</h1>
        </Link>
      </div>
      
      <div className="navbar-links">
        <Link to="/category/collares" className="nav-link">Collares</Link>
        <Link to="/category/anillos" className="nav-link">Anillos</Link>
        <Link to="/category/pulseras" className="nav-link">Pulseras</Link>
      </div>
      
      <CartWidget />
    </nav>
  );
};

export default NavBar;