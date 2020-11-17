import React, { Component } from 'react';
import TechFilter from './TechFilter';
import Project from './Project';
import store  from '../store/store';
const projects = store.Projects;
const tech = store.Tech;
class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            filterValue: null
        };
    }
    setFilter = (value) =>{
        this.setState({filterValue: value});
    }
    undoFilter = () => {
        this.setState({filterValue: null});
    };
    render() {
        return(
            <div className='projects container'>
                <div id='projects' className='anchor'/>
                <h2>Projects</h2>
                <TechFilter
                    setFilter = {this.setFilter}
                    undoFilter = {this.undoFilter}
                />
                <ul className="carousel_slides">
                    {projects.map((project, i) => {
                        let techUsed = []
                        tech.map((item, i) => {
                            if (item.projects.includes(project.id)){
                                if (item === tech[tech.length-1]){
                                    techUsed.push(item.name+'.')
                                }else{
                                    techUsed.push(item.name+', ')
                                }
                            }
                            return techUsed
                        });
                        if (this.state.filterValue === null){
                            return(
                                <Project
                                    key = {i}
                                    index = {i}
                                    project = {project}
                                    techUsed = {techUsed}
                                />
                            )
                        }else{
                            if ( this.state.filterValue.includes(project.id)){
                                return(
                                    <Project
                                    key = {i}
                                    index = {i}
                                    project = {project}
                                    techUsed = {techUsed}
                                    />
                                )
                            } else {
                                return ('')
                            };
                        };
                    })}
                </ul>



            </div>
        );
    };
};
export default Projects;
