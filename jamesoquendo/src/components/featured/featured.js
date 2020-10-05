import React from 'react';
import './featured.css';

const FeaturedProject = ({project}) => {
    if (project) return (
        <div id="featured" className="mx-n5">
            <img className="img-fluid float-right mb-2" src={project.image} alt={project.title}/>
            <div className="ml-5 mt-4">
                <span className="text-uppercase smaller">Featured Project</span>
                <h4 className="mt-n1">{project.title}</h4>
                <button className="btn btn-dark btn-sm-lg">Visit</button>
            </div>  
        </div>
    );
    
    return <div id="no-featured">No featured project at this time.</div>
}
 
export default FeaturedProject;