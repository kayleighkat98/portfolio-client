import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Header from './components/Header';
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
              component={NotFound}
            />
          </Switch>
        </main>
      </div>
    );
  };
};
export default App;
