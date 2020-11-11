import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component {

    render() {
        return(
            <div className='container'>
               <h1>Projects</h1>
               <Project/>
            </div>
        );
    };
};

export default Projects;