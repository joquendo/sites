import React, {Component} from 'react';
import Project from '../project';

class ProjectsPage extends Component {
  state = {
    projects:[]
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

  render() {
    return (
      <div className="container">
        <h1 className="h3">Projects</h1>
        <div className="row">
          {this.state.projects.map((project) => <Project key={project.id} project={project} />)}
        </div>
      </div>
    )
  }
}

export default ProjectsPage;