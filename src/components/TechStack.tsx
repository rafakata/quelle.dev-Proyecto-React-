import React, { useRef, useEffect } from 'react';

export const TechStack: React.FC = () => {
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

 const technologies = [
  // Frontend & Diseño
  "React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Figma","Bootstrap",
  
  // Backend & Lógica (Core de DAW)
  "Node.js", "Express", "Java", "PHP", "Laravel", "XAMPP",
  
  // Bases de Datos y Control de Versiones
  "SQL", "MySQL", "PostgreSQL", "MongoDB", "Git"
];

  return (
    <section className="tech-section" ref={sectionRef}>
      <h3 className="tech-subtitle">Tecnologías con las que construimos</h3>
      <div className="tech-pills-container">
        {technologies.map((tech, index) => (
          <div className="tech-pill" key={index}>
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
};