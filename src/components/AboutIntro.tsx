import React from 'react';

const AboutIntro: React.FC = () => {
  return (
    <section className="about-intro">
      <h2 className="about-title">
        Bienvenido a <span className="about-green">quelle.dev</span><span className="about-caret" aria-hidden="true" />
      </h2>
      <p className="about-desc">
        En <span className="about-green">quelle.dev</span> fusionamos el desarrollo Fullstack con
        estrategia de marketing para convertir tus visitas en clientes.
      </p>
      <p className="about-code">Código limpio, soluciones reales.</p>
    </section>
  );
};

export default AboutIntro;