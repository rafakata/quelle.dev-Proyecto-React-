import React from 'react';
import type { ReactNode } from 'react';

interface StoryBlockProps {
  title?: string;
  children: ReactNode;
  highlight?: boolean;
  dividerTitle?: string;
}

const StoryBlock: React.FC<StoryBlockProps> = ({ title, children, highlight = false, dividerTitle }) => (
  <div className={`story-block${highlight ? ' highlight-block' : ''}`}>
    {dividerTitle && <h2 className="section-divider-title">{dividerTitle}</h2>}
    {title && <h3>{title}</h3>}
    {children}
  </div>
);

export default StoryBlock;
