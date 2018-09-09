import React from 'react';
import { Router, Route, IndexRedirect,browserHistory } from 'react-router';
import Login from './container/login'
import Register from './container/register'
import App from './App';
import Home from './container/Home';


// const reducer = combineReducers({
//   ...reducers,
//   routing: routerReducer
// })
const Routes = () => {
  return (
    <Router history={browserHistory} >
    <Route path="/">
    <IndexRedirect to="login"/>
      <Route path="/App" component={App}>
      <IndexRedirect to="Home"/>
        <Route path={'Home'} component={Home}/>
        </Route>
      <Route path="/Register" component={Register}/>
       <Route path="/login" component={Login}/>
       </Route>
    </Router>
  );
};


export default Routes;
