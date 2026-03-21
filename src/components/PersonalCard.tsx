import React from 'react';

interface PersonalCardProps {
  photo: string;
  name: string;
  origin: string;
  birth: string;
}

const PersonalCard: React.FC<PersonalCardProps> = ({ photo, name, origin, birth }) => (
  <div className="personal-card">
    <img 
      src={photo} 
      alt={`Foto de perfil de ${name}`} 
      className="personal-photo"
    />
    <h2 className="personal-title">{name}</h2>
    <ul className="personal-list">
      <li><strong>Origen:</strong> {origin}</li>
      <li><strong>Nacimiento:</strong> {birth}</li>
    </ul>
  </div>
);

export default PersonalCard;
