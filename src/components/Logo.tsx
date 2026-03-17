import React from 'react';

interface LogoProps {
  scale?: number;
  color?: string;
  gradient?: boolean;
}

const Logo: React.FC<LogoProps> = ({ scale = 1, color = '#000000', gradient = false }) => {
  const gradientStyle = {
    background: 'linear-gradient(90deg, #CBFF31 0%, #8AD45D 100%)',
    backgroundClip: 'text' as const,
    WebkitBackgroundClip: 'text' as const,
    color: 'transparent',
    WebkitTextFillColor: 'transparent' as const,
  };

  const markPartStyle = gradient ? gradientStyle : { color };
  const textStyle = gradient
    ? { ...gradientStyle, fontSize: '1.8rem', letterSpacing: '-0.5px' }
    : { color, fontSize: '1.8rem', letterSpacing: '-0.5px' };

  return (
    <div
      className="logo-block"
      style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}
    >
      <div
        className="logo-mark"
        style={{
          fontFamily: "'TT Interphases Mono Local', monospace",
          marginBottom: '-0.5rem'
        }}
      >
        <span style={{ ...markPartStyle, fontSize: '5.0rem', transform: 'translateX(10px)' }}>/</span>
        <span style={{ ...markPartStyle, fontSize: '6.5rem', transform: 'translateX(-10px)' }}>&gt;</span>
      </div>
      <div
        className="logo-text"
        style={textStyle}
      >
        quelle.dev
      </div>
    </div>
  );
};

export default Logo;