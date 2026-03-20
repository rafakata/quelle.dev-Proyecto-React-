

import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../data/projects.json';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // Buscamos el proyecto en nuestro JSON que coincida con el ID de la URL
  const project = projectsData.find((p) => p.id === id);

  // Si el usuario escribe un ID manual que no existe
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [id]);

  useEffect(() => {
    if (!project) {
      navigate('/portfolio', { replace: true });
    }
  }, [project, navigate]);
  if (!project) return null;

  // Ajustar la ruta de la imagen para que funcione igual que en las miniaturas
  const imageUrl = project.image;

  const handleBack = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate('/portfolio');
  };

  return (
    <main className="main-bg project-detail-page">
      <div className="container-detail">
        {/* Enlace de retorno */}
        <a href="/portfolio" className="back-link" onClick={handleBack}>
          ← Volver a proyectos
        </a>

        <div className="detail-layout">
          {/* Columna Izquierda: Imagen */}
          <div className="detail-visual">
            <img src={imageUrl} alt={project.title} className="detail-image" />
          </div>

          {/* Columna Derecha: Info */}
          <div className="detail-content">
            <h1 className="detail-title">{project.title}</h1>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <p className="detail-description">
              {project.longDescription}
            </p>
            <div className="detail-actions">
              <a href={project.deploy} target="_blank" rel="noreferrer" className="cta-button detail-live-btn">
                Ver Web en Vivo
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" className="github-outline-button detail-github-btn">
                Repositorio GitHub
              </a>
            </div>
            <div className="detail-warning">
              <em>* El enlace desplegado podría no funcionar o tardar unos segundos en cargar.</em>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;