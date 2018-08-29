import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Auth from './app/screens/Auth';
import Dashboard from './app/screens/Dashboard';
import './assets/styles.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Auth} />
    <Route path="/dashboard" component={Dashboard} />
  </Router>,
  document.getElementById('container')
);
