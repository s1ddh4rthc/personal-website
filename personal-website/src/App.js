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
import dishDrop from './assets/dish_drop.png'
import ta_bot from './assets/ta_bot.png'

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
    description: 'Created an entire Unix-like shell in C which supported piping, subshells, I/O redirection, and other operations.',
    image: 'url-to-general-atomics-project-image.jpg',
    codeUrl: 'https://github.com/s1ddh4rthc/cs216/tree/main/216/projects/project6'
  },
  {
    id: 3,
    name: 'Document Manipulation System',
    description: 'Created a system that organizes and creates documents using dynamic memory allocation with a user-friendly command-line user interface.',
    image: 'url-to-umiacs-project-image.jpg',
    codeUrl: 'https://github.com/s1ddh4rthc/cs216/tree/main/216/projects/project3'
  },
  {
    id: 4,
    name: 'Technical Analysis Slackbot',
    description: 'Created a Slackbot that returns a buy/sell rating on an input ticker using Slack\'s API, with an architecture of AWS Lambda and S3.',
    image: ta_bot,
    codeUrl: 'https://github.com/apexfund/apex_dowbot'
  },
  {
    id: 5,
    name: 'Dish Drop',
    description: '',
    image: dishDrop,
    codeUrl: 'https://github.com/s1ddh4rthc/dish-drop'
  }
];


function App() {
  return (
    <div className="container">
      <div className="intro">
        <p>Hi, I'm an undergrad studying CS at University of Maryland - College Park!</p>
      </div>
      <div className="profile">
        <div className="profile-info">
          <h1>Siddharth Cherukupalli</h1>
          <p>( Software Engineer / ML Researcher )</p>
          <div className="social-links">
            <a href="/resume.pdf" className="resume-button" target="_blank" rel="noopener noreferrer">Resume / CV ></a>
            <div className="social-button">
              <a href="https://www.linkedin.com/in/siddharth-cherukupalli/" target="_blank" rel="noopener noreferrer">
                <img src={linkedInIcon} alt="LinkedIn" />
              </a>
            </div>
            <div className="social-button">
              <a href="https://www.github.com/s1ddh4rthc/" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
        <div className="image-section">
          <img src={profilePic} alt="Siddharth Cherukupalli" />
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
