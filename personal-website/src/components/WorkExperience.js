// WorkExperience.js

import React from 'react';
import ExperienceCard from './ExperienceCard';

const WorkExperience = ({ experiences }) => {
  return (
    <section id="work-experience">
      <h2>Work Experience</h2>
      <div className="experience-cards">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
