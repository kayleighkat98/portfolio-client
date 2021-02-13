import React, { Component } from 'react'
import CreatableSelect from 'react-select/creatable'
import '../styles/dist/create.css'
import ProjectsContext from '../contexts/projects-context'
import ReactLoading from 'react-loading'
class Create extends Component {

    constructor(props) {
        super(props)
        this.state = {
            names: []
        };
    }
    static contextType = ProjectsContext;
    findOptions(option){
        let options = []
        if (this.context.projects){
            this.context.projects.map( (project, i) =>{
                Object.keys(project).forEach(field =>{
                    if (field === option){
                        options.push({'key': i, value: project[field], label: project[field]})
                    }
                })
            })
            return (options)
        }
    }
    render() {
        return(
            <div className='create'>
                <h1>New project</h1>
                {!this.context.projects? <ReactLoading className="load" type={'spinningBubbles'} color='#181026'/>: null}
                <label id='name'>Name: </label>
                <CreatableSelect isClearable options={this.findOptions('name')}/>
                <label id='team'>Team Size: </label>
                <CreatableSelect/>
                <label id='stack'>Stack: </label>
                <CreatableSelect/>
                <section className='text'>
                    <label id='summary'>Summary: </label>
                    <CreatableSelect/>
                    <label id='role'>Role: </label>
                    <CreatableSelect/>
                </section>
                <section className='links'>
                    <label>Production Url: </label>
                    <CreatableSelect/>
                    <label>Client Url: </label>
                    <CreatableSelect/>
                    <label>Server Url:</label>
                    <CreatableSelect/>
                </section>
                <section className='images'>
                    <label id='type'>Type: </label>
                    <CreatableSelect/>
                    <label id='label'>Label: </label>
                    <CreatableSelect/>
                    <label id='url'>Url: </label>
                    <CreatableSelect/>
                </section>
                <section className='tech'>
                    <label id='label'>Label: </label>
                    <CreatableSelect/>
                    <label id='stack'>Stack: </label>
                    <CreatableSelect/>
                </section>
                <button title='Submit' type='submit'>Submit</button>
            </div>
        );
        
    }
}

export default Create