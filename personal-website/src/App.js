// App.js
import React from 'react';
import './css/styles.css';
import linkedInIcon from './assets/linkedin_icon.png'; 
import githubIcon from './assets/github_icon.png'; 
import Greetings from './components/Greetings';
import profilePic from './assets/profile_pic.png';
import Education from './components/Education';
import Experience from './components/Experience';
import CampusInvolvement from './components/CampusInvolvement';
import ProjectsSection from './components/ProjectsSection';
import techEnergy from './assets/tech_energy.png'

const projects = [
  {
    id: 1,
    name: 'Tech-Energy Statistical Arbitrage Strategy',
    description: 'Used Machine Learning models to create a statistical arbitrage strategy in stocks in the Information Technology and Energies sectors.',
    image: techEnergy,
    codeUrl: 'https://github.com/apexfund/long-short-strategy/blob/main/long_short_strat.ipynb'
  },
  {
    id: 2,
    name: 'Shell Project',
    description: 'Created an entire Unix-like shell in C which supported pipe, I/O redirection, and other operations.',
    image: 'url-to-general-atomics-project-image.jpg',
    codeUrl: 'https://github.com/your-username/general-atomics-project'
  },
  {
    id: 3,
    name: 'Document Manipulation System',
    description: 'Assisted in machine learning research, focusing on algorithms for natural language processing and computer vision.',
    image: 'url-to-umiacs-project-image.jpg',
    codeUrl: 'https://github.com/your-username/umiacs-research-project'
  },
  {
    id: 4,
    name: 'UMD STICs',
    description: 'Facilitated a course on introductory computer science concepts and practical programming skills.',
    image: 'url-to-umd-stics-project-image.jpg',
    codeUrl: 'https://github.com/your-username/umd-stics-project'
  },
  {
    id: 5,
    name: 'Apex Quant',
    description: 'Led the Apex Quant team to develop innovative trading algorithms that analyze financial markets for optimal trades.',
    image: 'url-to-apex-quant-project-image.jpg',
    codeUrl: 'https://github.com/your-username/apex-quant-project'
  },
  {
    id: 6,
    name: 'Hack4Impact',
    description: 'Developed software solutions for non-profit organizations to enhance their impact on social causes.',
    image: 'url-to-hack4impact-project-image.jpg',
    codeUrl: 'https://github.com/your-username/hack4impact-project'
  }
];


function App() {
  return (
    <div className="container">
      <div className="intro">
        <p>Hi, I'm an undergrad studying CS at University of Maryland - College Park!</p>
      </div>
      <div className="profile">
        <h1>Siddharth Cherukupalli</h1>
        <p>( Software Engineer / ML Researcher )</p>
        <div className="image-section">
          <img src={profilePic} alt="Siddharth Cherukupalli" />
        </div>
        <a href="resume.pdf" className="resume-button">Resumé</a>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/siddharth-cherukupalli/"><img src={linkedInIcon} alt="LinkedIn" /></a>
          <a href="https://www.github.com/s1ddh4rthc/"><img src={githubIcon} alt = "Github"></img></a>
        </div>
      </div>
      <div className="about">
      <Greetings />
      </div>
      <div className="education">
        <Education />
      </div>
      <div className="experience">
        <Experience />
      </div>
      <div className="campusInvolvement">
        <CampusInvolvement />
      </div>
      <div className="projects-section">
        <ProjectsSection projects={projects} />
      </div>
      
      </div> 
  );
}

export default App;
