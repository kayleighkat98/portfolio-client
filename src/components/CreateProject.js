import React, { Component } from 'react'
import CreatableSelect from 'react-select/creatable';
class CreateProject extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        };
    }

    render() {
        return(
            <div className='login'>
                <h1>New project</h1>
                <label id='name'>Name: </label>
                <CreatableSelect/>
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
            </div>
        );
    }
}

export default CreateProject