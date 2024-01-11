// ExperienceCard.js

import React from 'react';

const ExperienceCard = ({ companyLogo, role, duration, details }) => {
  return (
    <div className="card">
      <div className="card-front">
        <img src={companyLogo} alt="Company Logo" />
        <h3>{role}</h3>
        <p>{duration}</p>
      </div>
      <div className="card-back">
        <ul>
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
