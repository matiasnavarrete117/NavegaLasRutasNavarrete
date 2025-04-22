import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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
                <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
                    Inicio
                </NavLink>
                <NavLink to="/category/collares" className={({isActive}) => isActive ? "active" : ""}>
                    Collares
                </NavLink>
                <NavLink to="/category/anillos" className={({isActive}) => isActive ? "active" : ""}>
                    Anillos
                </NavLink>
                <NavLink to="/category/pulseras" className={({isActive}) => isActive ? "active" : ""}>
                    Pulseras
                </NavLink>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;