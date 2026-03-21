import React from 'react';
import type { ReactNode } from 'react';

interface ExperienceItemProps {
  title: string;
  children: ReactNode;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, children }) => (
  <div className="experience-item">
    <h4>{title}</h4>
    {children}
  </div>
);

export default ExperienceItem;
