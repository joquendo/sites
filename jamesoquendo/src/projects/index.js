import React, {Component} from 'react';
import Project from '../project';

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
      <div className="container-fluid">
        <section>
          <div>
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