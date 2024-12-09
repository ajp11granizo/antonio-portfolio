import React from 'react';
import './aboutme.css';

const Aboutme = () => {
  return (
    <section className="aboutme">
      <div className="aboutme-content">
        <h1>About Me</h1>
        <p>
          I am an Engineering Manager with over
          nine years of experience leading technical teams and turning ideas
          into impactful solutions. I specialize in:
        </p>
        <ul>
          <li>Cloud Infrastructure (AWS and Azure)</li>
          <li>Software Engineering (Frontend and Backend)</li>
          <li>Agile Methodologies (Scrum, Kanban)</li>
          <li>CI/CD Processes</li>
          <li>Leading Global Teams</li>
        </ul>
        <p>
          My focus is on enhancing user experiences, optimizing technological
          infrastructures, and developing innovative products that drive
          business success.
        </p>
      </div>
    </section>
  );
};

export default Aboutme;