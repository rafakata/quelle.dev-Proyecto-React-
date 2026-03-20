import React, { useRef, useEffect } from 'react';

export const CtaHome: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add('fade-up');
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-section" ref={sectionRef}>
      <h2 className="cta-title">¿Listo para dar el salto digital?</h2>
      <p className="cta-desc">
        Descubre cómo hemos ayudado a otros negocios a transformar su presencia online.
      </p>
      <button className="cta-button">Explorar portfolio</button>
    </section>
  );
};