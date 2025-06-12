import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, tech,link }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Live demo
        </a>
      )}
      <div className="tech-stack">{tech}</div>
    </div>
  );
}

export default ProjectCard;
