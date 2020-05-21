import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import RecipesPage from '../recipes';
import ProjectsPage from '../projects';
import AboutPage from '../about';

const HomePage = () => <section><h1>Welcome</h1></section>
const Navigation = () => {
  return (
    <Router>
      <Navbar expand="sm" className="justify-content-center">
        <Navbar.Brand href="/" className="mx-auto">James Oquendo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-flex-start ml-5">
          <Nav>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/recipes">Recipes</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
         </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route exact path="/" component={AboutPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/recipes" component={RecipesPage} />
      <Route path="/about" component={AboutPage} />
    </Router>
  );
};

export default Navigation;
