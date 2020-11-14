import React, { Component } from 'react'
import store  from '../store/store';
const tech = store.Tech
class TechFilter extends Component {
    render() {
        return(
            <div className='tech-filter'>
                <button key={'all'} onClick={e =>this.props.undoFilter()}>All</button>
                {tech.map((item, i)=>{
                    return (<button key={i} onClick={e =>this.props.setFilter(item.projects)}>{item.name}</button>)
                })}
            </div>
        );
    };
};

export default TechFilter;
