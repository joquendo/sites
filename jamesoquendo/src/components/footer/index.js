import React from 'react';
import './footer.css';
import LinkedInLogo from '../../images/logo-linkedin.svg'
import InstagramLogo from '../../images/logo-instagram.svg'
import GitHubLogo from '../../images/logo-github.svg'

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
        <a href="https://www.linkedin.com/in/jamesoquendo/"><img src={LinkedInLogo}/></a>
        <a href="https://www.github.com/joquendo/"><img src={GitHubLogo}/></a>
        <a href="https://www.instagram.com/jimmyjams22/"><img src={InstagramLogo} /></a>
      </div>
      <p className="copyright">&copy; 2020 All rights reserved.</p>
    </footer>
   );
}
 
export default Footer;