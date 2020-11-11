import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Landing from './routes/Landing';
import Bio from './routes/Bio';
import Contact from './routes/Contact';
import Project from './routes/Project';
import Projects from './routes/Projects';
import NotFound from './routes/NotFound';

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  };

  render() {
    const { hasError } = this.state
    return (
      <div className='App'>
        <Header />
        <main>
          {hasError && (
            <p>There was an error! Oh no!</p>
            )}
          <Switch>
            <Route
              exact
              path = '/'
              component = {Landing}
            />
            <Route
              path = '/bio'
              component = {Bio}
            />
            <Route 
              path = '/contact'
              component = {Contact}
            />
            <Route 
              path = '/projects/:id'
              component = {Project}
            />
            <Route 
              path = '/projects'
              component = {Projects}
            />
            <Route
              component={NotFound}
            />
          </Switch>
        </main>
      </div>
    );
  };
};
export default App;
