import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  // const workExperiences = [
  //   {
  //     companyLogo: 'path/to/company1-logo.png',
  //     role: 'Software Engineer Intern',
  //     duration: 'Dec 2023 – Present',
  //     details: [
  //       'Worked on the GuardX project to simulate cyber attacks.',
  //       'Streamlined workflows by implementing CI/CD pipelines.',
  //       'Leveraged Elasticsearch, Logstash, Kibana stack for log analysis.',
  //     ],
  //   },
  //   // Add more experiences as needed
  // ];

  return (
    <div>
      <Header />        
      <WorkExperience />        
      <Contact />
      <Education />
      <Footer />
    </div>
    );
  };

export default App;

