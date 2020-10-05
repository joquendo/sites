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
        <a href="https://www.linkedin.com/in/jamesoquendo/"><img src={LinkedInLogo} alt="My LinkedIn Profile"/></a>
        <a href="https://www.github.com/joquendo/"><img src={GitHubLogo} alt="My Github Repository"/></a>
        <a href="https://www.instagram.com/jimmyjams22/"><img src={InstagramLogo} alt="My Instagram Profile"/></a>
      </div>
      <p className="copyright">&copy;2020 James Oquendo. All rights reserved. </p>
    </footer>
   );
}
 
export default Footer;