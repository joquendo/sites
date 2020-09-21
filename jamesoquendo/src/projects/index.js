import React, {Component} from 'react';
import Project from '../project';
import FeaturedProject from '../components/featured/featured';

class ProjectsPage extends Component {
  state = {
    projects: [],
    featured: this.getRndInteger(1,3)
  };

  componentDidMount() {
    this.fetchProducts();
  }
  fetchProducts = () => {
    fetch(`./projects.json`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(projects => {
      this.setState({projects});
    })
  }
  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render() {
    return (
      <div className="container">
        <header>
          <FeaturedProject project={this.state.projects[this.state.featured]} />
        </header>
        <section>
          <div className="container-fluid">
            <h1 className="h3">Projects</h1>
            <div className="projects-list">
              <div className="row">
                {this.state.projects.map((project) => <Project key={project.id} project={project} />)}
              </div>
            </div>
          </div>
        </section>
      </div>

    )
  }
}

export default ProjectsPage;