// src/components/WorkExperience.js
import React from 'react';

const WorkExperience = () => {
  return (
    <section id="work-experience">
      <h2>Work Experience</h2>

      {/* Semantic Guard */}
      <div className="entry">
        <h3>Semantic Guard | Software Engineer Intern</h3>
        <p>Dec 2023 – Present</p>
        <ul>
          <li>Worked on the GuardX project to simulate cyber attacks for cybersecurity of Dept. of Defense using Docker containers</li>
          <li>Streamlined workflows by implementing robust CI/CD pipelines and using Bash, Python to automate routine tasks</li>
          <li>Leveraged Elasticsearch, Logstash, Kibana stack to analyze logs from Fluent Bit, uncovering security incidents</li>
        </ul>
      </div>

      {/* General Atomics - Aeronautical Systems */}
      <div className="entry">
        <h3>General Atomics - Aeronautical Systems | Software Engineer Intern</h3>
        <p>Jun 2023 – Aug 2023</p>
        <ul>
          <li>Improved reliability & safety of the Air Force MQ-9 Reaper drone by contributing to 5+ Flight Critical Software modules</li>
          <li>Optimized Automatic Takeoff/Landing Capabilities & improved Calculated Angle of Attack/Sideslip sensor accuracy by 25%</li>
          <li>Automated 40 additional test cases, increasing code coverage by 20% in the Flight Simulator automation framework</li>
        </ul>
      </div>

      {/* University of Maryland - Research Assistant */}
      <div className="entry">
        <h3>University of Maryland | Research Assistant</h3>
        <p>Jan 2023 – Present</p>
        <ul>
          <li>Designed advanced natural language processing models (RNNs) to analyze social media posts with accuracy of 95%</li>
          <li>Trained Machine Learning models to establish a correlation between weather data & economic damage with R2 of 0.92</li>
          <li>Adapted the Markov Chain Monte Carlo model to find patterns in 10 years of weather data with over 30,000 data points</li>
        </ul>
      </div>

      {/* University of Maryland - Course Facilitator */}
      <div className="entry">
        <h3>University of Maryland | Course Facilitator - CMSC389G: SWE Role Prep - Tools/Practices</h3>
        <p>Jan 2022 – Present</p>
        <ul>
          <li>Engineered Testudo Bank, a Java Spring banking application that 120+ students contributed to & reviewed 300+ PRs</li>
          <li>Followed MVC Architecture & Spring paradigms for robust code structure, reducing code maintenance time by 70%</li>
          <li>Created Docker containers & wrote Python scripts to populate MySQL, enabling ingestion of 10,000 records per minute</li>
        </ul>
      </div>

      {/* University of Maryland - Research Assistant (Previous) */}
      <div className="entry">
        <h3>University of Maryland | Research Assistant</h3>
        <p>Aug 2021 – Aug 2022</p>
        <ul>
          <li>Transformed Python scripts to break down URL parameters, automating data extraction from 20,000 web interactions</li>
          <li>Successfully established AWS ECS project infrastructure, enabling cost savings of 50% compared to on-premises hosting</li>
        </ul>
      </div>

      {/* Apex Quant Fund */}
      <div className="entry">
        <h3>Apex Quant Fund | President</h3>
        <p>Oct 2021 – Present</p>
        <ul>
          <li>Guided a team of 18 Quant Analysts using AGILE methodology, resulting in a 125% increase in project output and quality</li>
          <li>Spearheaded Research, Trading, & Software teams, with 6 analysts under each division developing highly impactful projects</li>
          <li>Delivered educational blog posts detailing project functionalities with 300+ reads (medium.com/@cherukusid)</li>
        </ul>
      </div>
    </section>
  );
};

export default WorkExperience;
