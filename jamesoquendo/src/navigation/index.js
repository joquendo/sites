import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ProjectsPage from '../projects';
import AboutPage from '../about';
import PrivacyPage from '../privacy';

import './navigation.css';

const Navigation = () => {
  return (
    <Router>
      <Navbar expand="sm">
        <Navbar.Brand href="/" className="mx-auto">James Oquendo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="text-center ml-sm-5">
          <Nav>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
         </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Route exact path="/" component={ProjectsPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/privacy" component={PrivacyPage} />
    </Router>
  );
};

export default Navigation;
