import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Login from './routes/Login';
import PrivateRoute from './components/PrivateRoute';
import PublicOnlyRoute from './components/PublicOnlyRoute';
import Create from './components/Create';
import './styles/dist/App.css';

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
            <PrivateRoute
              path={'/create'}
              component={Create}
            />
            <PublicOnlyRoute
              exact
              path = {'/'}
              component = {Home}
            />
            <Route
              path = {'/admin'}
              component = {Login}
            />
            <Route
              component={NotFound}
              />
          </Switch>
        </main>
        <Footer/>
      </div>
    );
  };
};
export default App;
