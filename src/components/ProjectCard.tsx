import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, image }) => {
  return (
    <Link to={`/trabajos/${id}`} className="project-card-link">
      <div className="project-card">
        <div className="project-card-image" style={{ backgroundImage: `url(${image})` }}>
          <div className="project-card-overlay">
            <span>Ver proyecto</span>
          </div>
        </div>
        <div className="project-card-info">
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-desc">{description}</p>
        </div>
      </div>
    </Link>
  );
};