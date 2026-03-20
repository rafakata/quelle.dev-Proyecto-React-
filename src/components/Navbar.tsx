import React from 'react';


import Logo from './Logo';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handlePortfolioClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (location.pathname !== '/portfolio') {
      navigate('/portfolio');
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-link" style={{display: 'inline-block'}} onClick={handleHomeClick}>
          <Logo scale={0.34} color="#000000" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li className="navbar-link">
          <Link to="/" className="navbar-link" onClick={handleHomeClick}>Inicio</Link>
        </li>
        <li className="navbar-link">
          <Link to="/portfolio" className="navbar-link" onClick={handlePortfolioClick}>Nuestros trabajos</Link>
        </li>
        <li className="navbar-link">¿Quiénes somos?</li>
      </ul>
      <div className="navbar-actions">
        <button className="navbar-contact" type="button">Contacto</button>
        <svg className="navbar-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;