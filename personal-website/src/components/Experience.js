import React from 'react';
import '../css/Experience.css';
import semanticGuardLogo from '../assets/semantic_guard.png'; // Path to Semantic Guard logo
import generalAtomicsLogo from '../assets/general_atomics.png'; // Path to General Atomics logo

const Experience = () => {
  return (
    <div className="experience-section">
      <h2>💼 Experience</h2>
      <div className="experience-cards-container">
        <div className="experience-card">
          <img src={semanticGuardLogo} alt="Semantic Guard" className="company-logo" />
          <h3 className="h3">Semantic Guard</h3>
          <p className="company_name">Software Engineer Intern</p>
          <p className="company_name">Dec 2023 - Present</p>
        </div>
        <div className="experience-card">
          <img src={generalAtomicsLogo} alt="General Atomics" className="company-logo" />
          <h3 className="h3">General Atomics</h3>
          <p className="company_name">Software Engineer Intern</p>
          <p className="company_name">Jun 2023 - Aug 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
