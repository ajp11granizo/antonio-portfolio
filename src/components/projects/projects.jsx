import React from 'react';
import './projects.css';
import projectsData from '../../data/projectsData';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

