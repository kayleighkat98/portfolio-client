import React, { Component } from 'react';
import '../styles/dist/Project.css';

class Project extends Component {
    render() {
        const {project, techUsed} = this.props
        return(
            <div>
                <h2>{project.name}</h2>
                <p className='p'>A {project.stack}-stack application</p>
                <button><a href={project.links.prod_url} target="_blank" rel="noreferrer">Visit</a></button>
                <button><a href={project.links.client_git} target="_blank" rel="noreferrer">Client Repository</a></button>
                <button><a href={project.links.server_git} target="_blank" rel="noreferrer">Server Repository</a></button>
                <h3>Tech Used:</h3>
                <p className='p'>{techUsed}</p>
    {/* 
                <h3>Summary:</h3>
                <p className='p'>{project.text.summary}</p>

                <h3>My Role</h3>
                <p className='p'>{project.text.role}</p> */}
            </div>
        );
    };
};
export default Project;