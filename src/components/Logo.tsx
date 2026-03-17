import React from 'react';

interface LogoProps {
  scale?: number;
  color?: string; // Añadimos color para cambiar entre blanco y negro
}

const Logo: React.FC<LogoProps> = ({ scale = 1, color = '#000000' }) => {
  return (
    <div
      className="logo-block"
      style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}
    >
      <div
        className="logo-mark"
        style={{ 
          color,
          fontFamily: "'TT Interphases Mono Local', monospace", 
          marginBottom: '-0.5rem' 
        }}
      >
        <span style={{ fontSize: '5.0rem', transform: 'translateX(10px)' }}>/</span>
        <span style={{ fontSize: '6.5rem', transform: 'translateX(-10px)' }}>&gt;</span>
      </div>
      <div
        className="logo-text"
        style={{ color: color, fontSize: '1.8rem', letterSpacing: '-0.5px' }}
      >
        quelle.dev
      </div>
    </div>
  );
};

export default Logo;