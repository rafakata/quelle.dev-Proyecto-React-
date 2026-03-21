import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div style={{ cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Ir al inicio">
        <Logo scale={0.45} color="--q-black" />
      </div>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/rafael-medina-quelle/" target="_blank" rel="noreferrer" className="footer-link" aria-label="LinkedIn">
          <i className="bi bi-linkedin" style={{ fontSize: '1.3rem' }}></i>
        </a>
        <a href="https://github.com/rafakata" target="_blank" rel="noreferrer" className="footer-link" aria-label="GitHub">
          <i className="bi bi-github" style={{ fontSize: '1.3rem' }}></i>
        </a>
        <a href="https://x.com/quelledev" target="_blank" rel="noreferrer" className="footer-link" aria-label="Twitter">
          <i className="bi bi-twitter-x" style={{ fontSize: '1.3rem' }}></i>
        </a>
      </div>
      <p className="footer-text">Málaga • 2026</p>
    </footer>
  );
};

export default Footer;