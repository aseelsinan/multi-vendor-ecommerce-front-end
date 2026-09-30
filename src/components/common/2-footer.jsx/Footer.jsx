import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="glass-footer text-center">
      <div className="container">
        
        {/* معلومات المشروع والمطور */}
        <div className="footer-content mb-4">
          <h3 className="footer-brand mb-3">
            <i className="fa-solid fa-store me-2 text-info"></i> E-Market
          </h3>
          <p className="footer-text mx-auto">
            A full-stack multi-vendor e-commerce platform built as a portfolio project. 
            Developed with React, Django, and a passion for clean code.
          </p>
        </div>
        
        {/* روابط السوشيال ميديا و GitHub */}
        <div className="social-links justify-content-center mb-4">
          <a href="#" className="social-icon" title="GitHub" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#" className="social-icon" title="LinkedIn" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#" className="social-icon" title="Twitter / X" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#" className="social-icon" title="Portfolio" target="_blank" rel="noreferrer">
            <i className="fa-solid fa-globe"></i>
          </a>
        </div>

        {/* حقوق النشر */}
        <div className="footer-bottom">
          <p className="mb-0 text-secondary">
            &copy; {new Date().getFullYear()} E-Market. Built by <span className="text-info fw-semibold">Aseel Sinan</span>. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;