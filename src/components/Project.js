/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import store  from '../store/store';
import '../styles/dist/Project.css';
import {FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa';
const projects = store.Projects;
class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
        };
    }

    goToSlide(index){
        this.setState({activeIndex: index });
    }
    goToPrevSlide(e) {
        e.preventDefault();

        let index = this.state.activeIndex;
        let projectsLength = projects.length;

        if (index < 1) {
            index = projectsLength;
        }

        --index;

        this.setState({
            activeIndex: index
        });
    }
    goToNextSlide(e) {
        e.preventDefault();
    
        let index = this.state.activeIndex;
        let projectsLength = projects.length - 1;
    
        if (index === projectsLength) {
          index = -1;
        }
    
        ++index;
    
        this.setState({
          activeIndex: index
        });
      }
    render() {
        const {project, techUsed} = this.props
        const {activeIndex} = this.state
        return(
            <div className="project">
                <div className='title center'>
                    <span className='project-name'>{project.name}</span>
                    <span>A {project.stack}-stack application</span>
                </div>
                <div className='center'>
                    <a href={project.links.prod_url} target="_blank" rel="noreferrer"><button>Visit</button></a>
                    <a href={project.links.client_git} target="_blank" rel="noreferrer"><button>Client Repository</button></a>
                    <a href={project.links.server_git} target="_blank" rel="noreferrer"><button>Server Repository</button></a>
                </div>
                <h3>Tech Used:</h3>
                <p className='p'>{techUsed}</p>
                <h3>Summary:</h3>
                <p className='p'>{project.text.summary}</p>
                <h3>My Role</h3>
                <p className='p'>{project.text.role}</p>
                <div className='carousel'>
                    <FaArrowCircleLeft
                        href="#"
                        className="carousel__arrow carousel__arrow--left"
                        onClick={e => this.goToPrevSlide(e)}
                    />
                    
                    <ul>
                        {project.images.map((image, index) => {
                            if (image.type === 'mobile'){
                                return(
                                    <li
                                        className={
                                        index == activeIndex
                                            ? "carousel__slide carousel__slide--active"
                                            : "carousel__slide"
                                        }
                                        key={index}
                                    >
                                        <img className="mob-img" src={image.url} alt={image.name} />
                                    </li>
                                )
                            } else if (image.type === 'desktop'){
                                return(
                                    <li
                                        className={
                                        index == activeIndex
                                            ? "carousel__slide carousel__slide--active"
                                            : "carousel__slide"
                                        }
                                        key={index}
                                    >
                                        <img className="desk-img" src={image.url} alt={image.name} />
                                    </li>
                                )
                            } else{
                                return(
                                    <li
                                        className={
                                        index == activeIndex
                                            ? "carousel__slide carousel__slide--active"
                                            : "carousel__slide"
                                        }
                                        key={index}
                                    >
                                        <img className="img" src={image.url} alt={image.name} />
                                    </li>
                                )
                            }
                            
                        })}
                    </ul>
                    <FaArrowCircleRight
                        href="#"
                        className="carousel__arrow carousel__arrow--right"
                        onClick={e => this.goToNextSlide(e)}
                    />
                    <ul className="carousel__indicators">
                        {project.images.map((project, index) => {
                            return(
                                <li key={index}>
                                    <a
                                        className={
                                        index == this.state.activeIndex
                                            ? "carousel__indicator carousel__indicator--active"
                                            : "carousel__indicator"
                                        }
                                        onClick={e => this.goToSlide(index)}
                                    />
                                </li>
                            ) 
                        })}
                    </ul>
                </div>
            </div>
        );
    };
};
export default Project;