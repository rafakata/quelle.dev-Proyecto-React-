import React, { useEffect, useRef, useState } from 'react';

const AboutIntro: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.45 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`about-intro ${isVisible ? 'is-visible' : ''}`}>
      <h2 className="about-title">
        <span className="about-title-typing">
          <span className="about-title-track">
            Bienvenido a <span className="about-green">quelle.dev</span>
          </span>
          <span className="about-caret" aria-hidden="true" />
        </span>
      </h2>
      <p className="about-desc">
        En <span className="about-green">quelle.dev</span> fusionamos el desarrollo Fullstack con
        estrategia de marketing para convertir tus visitas en clientes.
      </p>
      {/* Se ha aplicado la clase about-green a 'soluciones reales' */}
      <p className="about-code">Código limpio, <span className="about-green">soluciones reales.</span></p>
    </section>
  );
};

export default AboutIntro;