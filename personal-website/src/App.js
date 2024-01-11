// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Header from './components/Header';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
// import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css'; // Import the styles.css file
// import Navbar from './components/Navbar';

const App = () => {
  const workExperiences = [
    {
      companyLogo: 'path/to/company1-logo.png',
      role: 'Software Engineer Intern',
      duration: 'Dec 2023 – Present',
      details: [
        'Worked on the GuardX project to simulate cyber attacks.',
        'Streamlined workflows by implementing CI/CD pipelines.',
        'Leveraged Elasticsearch, Logstash, Kibana stack for log analysis.',
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <Router>
      <div>
        <Routes> {/* Use 'Routes' instead of 'Switch' */}
          <Route path="/about" element={<Header />} />
          <Route path="/experience" element={<WorkExperience experiences={workExperiences} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Education />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

