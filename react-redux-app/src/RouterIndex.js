import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import Login from './container/login'
import Register from './container/register'
import App from './App';
import Home from './container/Home';

const Routes = () => {
  return (
    <Router history={browserHistory}>
    <IndexRedirect to="login"/>
      <Route path="/App" component={App}>
      <IndexRedirect to="Home"/>
        <Route path={'Home'} component={Home}/>
        </Route>
      <Route path="/Register" component={Register}/>
       <Route path="/login" component={Login}/>
    </Router>
  );
};


export default Routes;
