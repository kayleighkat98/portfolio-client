import React, { Component } from 'react'
import STORE from '../STORE'

class Landing extends Component {
    render() {
        console.log(STORE)
        return(
            <div className='container'>
               <h1>Landing</h1>
            </div>
        );
    }
}

export default Landing