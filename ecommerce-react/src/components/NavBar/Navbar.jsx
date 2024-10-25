
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#4b0082', position: 'fixed', top: '0', left: '0', width: '100%', zIndex: '1000' }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white">SmartLab</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/categoria/smartphone" className="nav-link text-white">Celulares</Link>
            </li>
            <li className="nav-item">
              <Link to="/categoria/laptop" className="nav-link text-white">Notebooks</Link>
            </li>
            <li className="nav-item">
              <Link to="/categoria/audio" className="nav-link text-white">Audio</Link>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
