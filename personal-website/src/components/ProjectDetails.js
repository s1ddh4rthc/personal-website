import React from 'react';
import '../css/ProjectDetails.css';

const ProjectDetails = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="project-details-modal">
      <div className="project-details-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={project.image} alt={project.name} className="project-details-image" />
        <h2 className="project-details-title">{project.name}</h2>
        <p>{project.description}</p>
        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
    </div>
  );
};

export default ProjectDetails;
