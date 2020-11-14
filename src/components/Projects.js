import React, { Component } from 'react';
import TechFilter from './TechFilter';
import Project from './Project';

class Projects extends Component {
    state = {
        filterValue: null
    }
    filterFunction = (id) =>{
        this.setState({filterValue: id});
    }
    render() {
        return(
            <div className='container'>
                <h1>Projects</h1>
                <TechFilter
                    filterFunction = {this.filterFunction}
                />
                <Project
                    filterValue = {this.state.filterValue}
                />
            </div>
        );
    };
};
export default Projects;