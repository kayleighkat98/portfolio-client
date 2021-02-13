import React, { Component } from 'react'
import TokenService from '../services/token-service'
import config from '../config'

const ProjectsContext = React.createContext({
    projects: null,
    error: null,
    setError: () => {},
    clearError: () => {}
})
export default ProjectsContext;
export class ProjectsProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: null,
            error: null,
            setError: () => {},
            clearError: () => {}
        };
    };
    fetchProjects = () => {
        fetch(`${config.API_ENDPOINT}/projects`)
        .then(response =>
            response.json()
        ).then((projects) =>{
            this.setState({projects});
        }).catch((error) =>{
            console.error(error.message);
        });
    };
    setError = error => {
        console.error(error);
        this.setState({ error });
    };
    clearError = () => {
        this.setState({ error: null });
    };
    componentDidMount(){
        this.fetchProjects()
    }
    render(){
        const value = {
            projects: this.state.projects,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
        };
        return (
            <ProjectsContext.Provider value={value}>
                {this.props.children}
            </ProjectsContext.Provider>
        );
    };
};