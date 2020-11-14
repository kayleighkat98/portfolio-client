import React, { Component } from 'react'
import store  from '../store/store';
const tech = store.Tech
class TechFilter extends Component {
    render() {
        return(
            <div className='tech-filter'>
                {tech.map((item, i)=>{
                    let techs = [];
                    techs.push(<button key={i} onClick={e =>this.props.filterFunction(item.id)}>{item.name}</button>)
                    return (techs)
               })}
            </div>
        );
    };
};

export default TechFilter;
