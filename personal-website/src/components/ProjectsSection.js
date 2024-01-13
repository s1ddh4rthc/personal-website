import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';
import '../css/ProjectsSection.css';

const ProjectsSection = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-section">
      <h1 className="projects-header">🛠️ Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
        ))}
      </div>
      <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default ProjectsSection;
