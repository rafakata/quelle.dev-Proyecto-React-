import React from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-logo-wrap">
        <Logo scale={0.4} color="#000000" />
      </div>
      <h1 className="hero-title">
        Soluciones web que hablan el idioma de tu negocio.
      </h1>
      <button className="button-main">
        Conócenos
      </button>
      {/* Flecha doble hacia abajo */}
      <div className="bounce" style={{ marginTop: '4rem', cursor: 'pointer' }}>
        <svg style={{ width: '48px', height: '48px', color: '#000' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;