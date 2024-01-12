// App.js
import React from 'react';
import './css/styles.css';
import linkedInIcon from './assets/linkedin_icon.png'; // Replace with the path to your image
import githubIcon from './assets/github_icon.png'; // Replace with the path to your image
import Greetings from './components/Greetings';
// import profilePhoto from './photo.jpg'; // Replace with the path to your image

function App() {
  return (
    <div className="container">
      <div className="intro">
        <p>Hi, I'm an undergrad studying CS at University of Maryland - College Park!</p>
      </div>
      <div className="profile">
        <h1>Siddharth Cherukupalli</h1>
        <p>( Software Engineer / ML Researcher )</p>
        <a href="resume.pdf" className="resume-button">Resumé</a>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/siddharth-cherukupalli/"><img src={linkedInIcon} alt="LinkedIn" /></a>
          <a href="https://www.github.com/s1ddh4rthc/"><img src={githubIcon} alt = "Github"></img></a>
        </div>
      </div>
      <div className="about">
      <Greetings />
      </div>
      </div> 
  );
}

export default App;
