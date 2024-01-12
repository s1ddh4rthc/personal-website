import React from 'react';
import '../css/Greetings.css'; // Make sure the CSS file is in the same directory

const Greetings = () => {
  return (
    <div className="greetings">
      <h2>
        <span role="img" aria-label="wave">👋 </span> 
        Nice to meet you!
      </h2>
      <p>
        My name is Siddharth, and I am a junior at the University of Maryland - College Park pursuing towards 
        a B.S. in Computer Science. 
        
        I am interested in Machine Learning, and I love working on projects that lay at the intersection of
        finance and computer science, as showcased by my work at  
        <a href="https://www.github.com/apexfund" className="underline"> Apex Quant</a>.
      </p>
    </div>
  );
};

export default Greetings;
