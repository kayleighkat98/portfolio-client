import React, { Component } from 'react';
import TechFilter from './TechFilter';
import Project from './Project';

class Projects extends Component {
    state = {
        filterValue: null
    }
    setFilter = (value) =>{
        this.setState({filterValue: value});
    }
    undoFilter = () => {
        this.setState({filterValue: null});
    };
    render() {
        return(
            <div className='container'>
                <h1>Projects</h1>
                <TechFilter
                    setFilter = {this.setFilter}
                    undoFilter = {this.undoFilter}
                />
                <Project
                    filterValue = {this.state.filterValue}
                />
            </div>
        );
    };
};
export default Projects;