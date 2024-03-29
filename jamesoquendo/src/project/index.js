import React from 'react';
import './project.css';

const Project = (props) => {

  const project = props.project;

  return (
    <div className="col-md-6 col-xl-4 mb-2">
      <div key={project.key} className="card">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <img className="card-img-top" src={project.image} alt={project.title} />
        </a>
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
          <div className="bg-light technology">
            <small>Technology</small>
            <p className="card-text">{project.technology}</p>
          </div>
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">Visit</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;