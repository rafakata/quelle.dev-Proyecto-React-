import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Logo scale={0.45} color="--q-black" />
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/rafael-medina-quelle/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
        <a href="https://github.com/rafakata" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
      </div>
      <p className="footer-text">Málaga • 2026</p>
    </footer>
  );
};

export default Footer;