import React, { Component } from 'react';
import STORE  from '../STORE';
const projects = STORE.Projects
const tech = STORE.Tech

class Project extends Component {
    render() {
        console.log(tech)
        return(
            <div className='container'>
            {projects.map((project, i) => {
                let techUsed = []
                tech.map((tech) => {
                    if (tech.projects.includes(project.id)){
                        techUsed.push(tech.name)
                    }
                    return techUsed
                });
                console.log(project.name,techUsed)
                return(
                    <h2 key={i}>{project.name}</h2>
                )
            })}
            </div>
        );
    };
};

export default Project;