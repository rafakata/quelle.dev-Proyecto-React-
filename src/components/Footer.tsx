import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 py-12 px-8 flex flex-col items-center font-poppins">
      <Logo scale={0.5} />
      
      <div className="flex gap-6 mt-8 mb-6">
        <a href="https://www.linkedin.com/in/rafael-medina-quelle/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#cbff31] transition-colors">
          LinkedIn
        </a>
        <a href="https://github.com/rafakata" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#cbff31] transition-colors">
          GitHub
        </a>
      </div>

      <p className="text-gray-600 text-xs tracking-widest uppercase font-semibold">
        Málaga • 2026
      </p>
    </footer>
  );
};

export default Footer;