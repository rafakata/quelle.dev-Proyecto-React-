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
        <li className="navbar-link">
          <Link to="/quienes-somos" className="navbar-link">¿Quiénes somos?</Link>
        </li>
      </ul>
      <div className="navbar-actions">
        <button className="navbar-contact" type="button">Contacto</button>
      </div>
    </nav>
  );
};

export default Navbar;