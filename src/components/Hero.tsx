import React from 'react';
import Logo from './Logo';

interface HeroProps {
  onScrollNext: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollNext }) => {
  return (
    <section className="hero-section">
      <div className="hero-logo-wrap">
        <Logo scale={0.78} color="#000000" />
      </div>
      <h1 className="hero-title">
        Soluciones web que hablan el idioma de tu negocio.
      </h1>
      <button className="button-main" type="button" onClick={onScrollNext}>
        Conócenos
      </button>
      <button
        type="button"
        aria-label="Bajar a la sección principal"
        className="hero-arrow bounce"
        onClick={onScrollNext}
      >
        <svg style={{ width: '62px', height: '62px', color: '#000' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
};

export default Hero;