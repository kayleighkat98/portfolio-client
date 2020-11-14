import React, { Component } from 'react';
import TechFilter from './TechFilter';
import Project from './Project';
import store  from '../store/store';
const projects = store.Projects;
const tech = store.Tech;
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
                {projects.map((project, i) => {
                    let techUsed = []
                    tech.map((item, i) => {
                        if (item === tech[tech.length-1]){
                            techUsed.push(item.name+'.')
                            return (techUsed)
                        }
                        techUsed.push(item.name+', ')
                        return (techUsed)
                    });
                    if (this.state.filterValue === null){
                        return(
                            <Project
                                key = {i}
                                project = {project}
                                techUsed = {techUsed}
                            />
                        )
                    }else{
                        if ( this.state.filterValue.includes(project.id)){
                            return(
                                <Project
                                    key = {i}
                                    project = {project}
                                    techUsed = {techUsed}
                                />
                            )
                        } else {
                            return ('')
                        };
                    };
                })}
            </div>
        );
    };
};
export default Projects;