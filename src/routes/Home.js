import React, { Component } from 'react';
import Landing from '../components/Landing';
import Bio from '../components/Bio';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Scroll from '../components/Scroll.js';

class Home extends Component {
    render() {
        return(
            <div className='home'>
                <Landing />
                <Bio />
                <Contact/>
                <Projects/>
                <Scroll/>
            </div>
        );
    };
};
export default Home;