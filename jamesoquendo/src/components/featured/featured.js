import React from 'react';
import './featured.css';

const FeaturedProject = ({project}) => {
    if (project) return (
        <div id="featured" className="bg-light">
            <div className="d-flex flex-column">
                <h4 className="font-weight-light">Featured Project <span className="font-weight-bold">{project.title}</span></h4>
                <img src={project.image} alt={project.title}/>
            </div>
        </div>
        
    );
        
    return <div id="no-featured">No featured project at this time.</div>
}
 
export default FeaturedProject;