import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import './styles/dist/App.css'

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
          {hasError && (<p>There was an error! Oh no!</p>)}
          {/*  */}
          <Switch>
            <Route
              exact
              path = '/'
              component = {Home}
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
