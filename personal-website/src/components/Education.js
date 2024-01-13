import React from 'react';
import '../css/Education.css'; 
import universityLogo from '../assets/umd_logo.jpeg';

const Education = () => {
  return (
    <div className="education-section">
      <h2>📚 Education</h2>
      <div className="education-card">
        <img src={universityLogo} alt="University of Maryland Logo" className="university-logo" />
        <h3>University of Maryland - College Park</h3>
        <p>BS, Computer Science</p>
        <p>Graduating Dec 2024</p>
      </div>
    </div>
  );
};

export default Education;
