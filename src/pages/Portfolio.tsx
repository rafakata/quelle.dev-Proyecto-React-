
import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import projectsData from '../data/projects.json';
import Navbar from '../components/Navbar';

const Portfolio: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="main-bg portfolio-page">
        <section className="portfolio-header">
          <h1 className="portfolio-main-title">
            Mis <span className="highlight-lime">Trabajos</span>
          </h1>
          <p className="portfolio-subtitle">
            Una selección de proyectos donde el código y la estrategia se dan la mano.
          </p>
        </section>

        <section className="portfolio-grid-container">
          <div className="projects-grid">
            {projectsData.map((project) => (
              <ProjectCard 
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;