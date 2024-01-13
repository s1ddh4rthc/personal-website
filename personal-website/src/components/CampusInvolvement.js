import React from 'react';
import '../css/CampusInvolvement.css'; 
import mlResearchLogo from '../assets/umiacs.jpg';
import sticsLogo from '../assets/umd_stics.png';
import apexQuantLogo from '../assets/apex_quant.jpeg';

const CampusInvolvement = () => {
  return (
    <div className="campus-involvement-section">
      <h2>🏫 Campus Involvement</h2>
      <div className="involvement-cards-container">
        {}
        <div className="involvement-card">
          <img src={mlResearchLogo} alt="Machine Learning Research" className="involvement-logo" />
          <h3 className="h3">UMIACS</h3>
          <p className="company_name">ML Research Assistant</p>
          <p className="company_name">Jan 2023 - Present</p>
        </div>
        <div className="involvement-card">
          <img src={sticsLogo} alt="UMD STICs" className="involvement-logo" />
          <h3 className="h3">UMD STICs</h3>
          <p className="company_name">Course Facilitator</p>
          <p className="company_name">Jan 2022 - Present</p>
        </div>
        <div className="involvement-card">
          <img src={apexQuantLogo} alt="Apex Quant" className="involvement-logo" />
          <h3 className="h3">Apex Quant</h3>
          <p className="company_name">President</p>
          <p className="company_name">Oct 2021 - Present</p>
        </div>
      </div>
    </div>
  );
};

export default CampusInvolvement;
