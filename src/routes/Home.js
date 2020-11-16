import React, { Component } from 'react';
import Landing from '../components/Landing';
import Bio from '../components/Bio';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import ScrollArrow from '../components/ScrollArrow.js';
class Home extends Component {
    render() {
        return(
            <div className='home'>
                <Landing/>
                <Bio/>
                <Contact/>
                <Projects/>
                <ScrollArrow/>
            </div>
        );
    };
};
export default Home;