import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Setting from './pages/Setting';
import Billing from './pages/Billing';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Auth}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/register' component={Register}/>
          <Route path='/setting' component={Setting}/>
          <Route path='/billing' component={Billing}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
