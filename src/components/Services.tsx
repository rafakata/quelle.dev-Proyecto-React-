import React, { useEffect, useRef, useState } from 'react';

const serviceList = [
  {
    title: 'Desarrollo Fullstack',
    description:
      'Creamos aplicaciones web rápidas, seguras y escalables utilizando React y tecnologías modernas. Código estructurado para crecer contigo.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  },
  {
    title: 'Visión Comercial',
    description:
      'Tu web no debe ser solo un escaparate bonito. Diseñamos flujos de usuario orientados a la conversión y a captar clientes reales.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
  },
  {
    title: 'Rendimiento y UX',
    description:
      'Interfaces modernas que enamoran a tu usuario y tiempos de carga optimizados para que Google te posicione donde mereces estar.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Impulso Digital & RRSS',
    description:
      'Gestionamos tus redes sociales y aplicamos estrategias de Marketing Digital para acelerar la digitalización de tu empresa y conectar con tu cliente ideal.',
    icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z'
  }
];

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const timeouts: number[] = [];

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsTitleVisible(true);

        serviceList.forEach((_, index) => {
          const timeoutId = window.setTimeout(() => {
            setVisibleCards((prev) => (prev.includes(index) ? prev : [...prev, index]));
          }, 380 + index * 320); // Más lento: 320ms entre tarjetas
          timeouts.push(timeoutId);
        });

        observer.disconnect();
      },
      { threshold: 0.25 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <h2 className={`services-title reveal-up ${isTitleVisible ? 'is-visible' : ''}`}>
        Nuestros <span className="highlight-lime">Pilares</span>
      </h2>
      <div className="services-grid">
        {serviceList.map((service, index) => (
          <div
            className={`service-card reveal-up ${visibleCards.includes(index) ? 'is-visible' : ''}`}
            key={index}
          >
            <div className="service-icon-wrapper">
              <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
              </svg>
            </div>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};