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
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Git", "Figma", "Node.js", "SQL"
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