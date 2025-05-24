import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, tech }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="tech-stack">{tech}</div>
    </div>
  );
}

export default ProjectCard;
