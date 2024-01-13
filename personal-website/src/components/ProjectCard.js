import React from 'react';
import '../css/ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <img src={project.image} alt={project.name} className="project-image" />
      <div className="project-name">{project.name}</div>
    </div>
  );
};

export default ProjectCard;
