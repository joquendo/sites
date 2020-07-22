import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="container">
      <div>
        <h1 className="h3">James Oquendo</h1>
        <p>Web programmer living and working in the Los Angeles area. I'm always seeking new opportunities to learn and build with the latest technology stacks available.</p>
        <p><Link to="/projects">View my web projects here</Link></p>
      </div>
    </div>
  );
}
 
export default AboutPage;