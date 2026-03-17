import React from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#cbff31] text-black font-poppins border-b-2 border-black/10">
      <div className="flex items-center">
        <Logo scale={0.35} color="#000000" />
      </div>
      
      <ul className="hidden md:flex gap-10 items-center text-[15px] font-medium">
        <li className="cursor-pointer hover:font-bold transition-all">Inicio</li>
        <li className="cursor-pointer hover:font-bold transition-all">Nuestros trabajos</li>
        <li className="cursor-pointer hover:font-bold transition-all">¿Quiénes somos?</li>
      </ul>

      <div className="flex items-center gap-4">
        <button className="bg-black text-[#cbff31] px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform">
          Contacto
        </button>
        {/* Icono del mundo que aparece en tu boceto */}
        <svg className="w-6 h-6 text-black cursor-pointer hover:opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;