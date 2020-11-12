import React, { Component } from 'react';
import store  from '../store/store';
import '../styles/dist/Project.css'
const projects = store.Projects
const tech = store.Tech

class Project extends Component {
    render() {
        console.log(tech)
        return(
            <div className='container project'>
                {projects.map((project, i) => {
                    let techUsed = []
                    tech.map((tech) => {
                        if (tech.projects.includes(project.id)){
                            techUsed.push(tech.name+" ")
                        }
                        return techUsed
                    });
                    console.log(project)
                    return(
                        <div key={i}>
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
                    )
                })}
            </div>
        );
    };
};

export default Project;