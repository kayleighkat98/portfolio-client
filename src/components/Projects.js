import React, { Component } from 'react';
import Project from './Project';
import store  from '../store/store';
import FilterSelect from './FilterSelect'
const projects = store.Projects;
const tech = store.Tech;
class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterValue: null,
            filterSelectArray: [
                {filter: 'name', data: projects, label: 'Name: '},
                {filter: 'stack', data: projects, label: 'Stack: '},
                {filter: 'team', data: projects, label: 'Team Size: '},
                {filter: 'front', data: tech, label: 'Front-End Tech: '},
                {filter: 'back', data: tech, label: 'Back-End Tech: '},
            ],
            filters: []
        };
    }
    onChangeFilter= (data, key)=>{
        let filters = [...this.state.filters]//copy state
        let index = filters.findIndex((entry => entry.key === key))//find index of match if exists
        if(data){//if any filters are in place for this filter category
            data.map((obj)=>{//iterate through changed data
                if( index === -1){//if filter type does not yet exist
                    filters.push({'key':obj.key, 'value': [obj.value]})//filter type created
                }else{//otherwise filter type exists already and needs configuration
                    let filter = {...filters[index]}//isolate filter data that exists
                    if(data.length < filter.value.length){//if a deletion has been made
                        let values = []
                        for (let i = 0; i< filter.value.length; i++){
                            if(filter.value[i]===obj.value){
                                values.push(obj.value)
                            }
                        }
                        filter.value= [...values]
                        filters[index] = filter
                    } else if (filter.value.findIndex((entry => entry === obj.value)) === -1){//if value does not exist in filter type values
                        filter.value = [...filter.value, obj.value]
                        filters[index] = filter
                    } 
                }
            })
            this.setState({filters: [...filters]})
        }else{//if data is null
            let deleteIndex = filters.findIndex((entry => entry.key === key))
            if (deleteIndex !== -1){
                filters.splice(deleteIndex, 1)
                this.setState({filters: [...filters]})
            }
        }
        return
    }
    render() {
        return(
            <div className='projects container'>
                <div id='projects' className='anchor'/>
                <h2>Projects</h2>
                <div className='tech-filters'>
                    <h3>Filter:</h3>
                    {this.state.filterSelectArray.map((object, i)=>{
                        return(
                            <div className={object.filter+'Dropdown'} key={i}>
                                <label>{object.label}</label>
                                <FilterSelect
                                    filter={object.filter}
                                    data={object.data}
                                    filters={this.state.filters}
                                    onChange={this.onChangeFilter}
                                />
                            </div>
                        )
                    })}
                </div>
                <ul>
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