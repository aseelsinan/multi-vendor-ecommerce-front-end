import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header-wrapper sticky-top">
     
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid px-4 px-lg-5">
          <Link className="navbar-brand fw-bold brand-logo text-decoration-none" to="/">
            <span className="brand-accent">E</span>-Market
          </Link>
          
          <button 
            className="navbar-toggler custom-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#mainNavbar" 
            aria-controls="mainNavbar" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-2">
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/categories">Categories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" to="/vendors">Vendors</Link>
              </li>
              <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                <Link className="btn btn-modern-login text-decoration-none" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;