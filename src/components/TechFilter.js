import React, { Component } from 'react'
import store  from '../store/store';
const tech = store.Tech
class TechFilter extends Component {
    render() {
        return(
            <div className='tech-filter'>
                <h3>Filter:</h3>
                <div className='filters'>
                    <button className='filterBtn' key={'all'} onClick={e =>this.props.undoFilter()}>All</button>
                    {tech.map((item, i)=>{
                        return (<button className='filterBtn' key={i} onClick={e =>this.props.setFilter(item.projects)}>{item.name}</button>)
                    })}
                </div>
            </div>
        );
    };
};

export default TechFilter;
