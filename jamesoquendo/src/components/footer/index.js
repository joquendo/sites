import React from 'react';
import './footer.css';

const Footer = () => {
  return ( 
    <footer>
      <div className="d-flex flex-row justify-content-center me">James Oquendo</div>
      <div className="d-flex flex-row justify-content-center">
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
      <div className="social">
        <a href="https://www.linkedin.com/in/jamesoquendo/">Li</a>
        <a href="https://www.instagram.com/jimmyjams22/">IG</a>
      </div>
      <p className="copyright">&copy; 2020 All rights reserved.</p>
    </footer>
   );
}
 
export default Footer;