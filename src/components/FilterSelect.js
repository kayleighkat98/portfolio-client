/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
const animatedComponents = makeAnimated();
class FilterSelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }
    findOptions(filter, data) {
        let options = [];
        if (filter === 'name'){
            data.map((project,i)=>{
                options.push({'key': filter, 'value': project.name.toLowerCase(), 'label': project.name})
            })
            return options;
        }
        if (filter ==='stack'){
            let tempTypes = [];
            let types = [];
            data.map((project)=>{
                tempTypes.push(project.stack);
            })
            for (let i =0; i< tempTypes.length; i++){
                if (types.indexOf(tempTypes[i]) === -1){
                    types.push(tempTypes[i]);
                }
            }
            types.map((option, i)=>{
                options.push({'key': filter, 'value': option.toLowerCase(), 'label': option})
            })
            return options;
        }
        if (filter ==='team'){
            let tempTypes = [];
            let types = [];
            data.map((project)=>{
                tempTypes.push(project.team_size);
            })
            tempTypes.sort();
            for (let i =0; i< tempTypes.length; i++){
                if (types.indexOf(tempTypes[i]) === -1){
                    types.push(tempTypes[i]);
                }
            }
            types.map((option, i)=>{
                options.push({'key': filter, 'value': option, 'label': option})
            })
            return options;
        }
        if (filter === 'front'|| filter === 'back'){
            data.map((option, i)=>{
                if (option.stack.toLowerCase() === filter){
                    options.push({ 'key': filter, 'value': option.projects, 'label': option.name})
                }
            })
            return options;
        }
    }
    render() {
        return(
            <Select
                isMulti
                name={this.props.filter}
                components={animatedComponents}
                options={this.findOptions(this.props.filter, this.props.data)}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e)=>{this.props.onChange(e,this.props.filter)}}
            />
        );
    };
};

export default FilterSelect;
