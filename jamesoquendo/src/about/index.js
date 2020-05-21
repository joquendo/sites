import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="container">
      <div className="bottom">
        <h1 className="h3">James Oquendo</h1>
        <p>Web programmer living and working in the Los Angeles area.</p>
        <p><Link to="/projects">View my web projects here</Link> </p>
        <p><Link to="/recipes">View my recipes here</Link> </p>
      </div>
    </div>
  );
}
 
export default AboutPage;