import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, Route, browserHistory,IndexRoute} from 'react-router';
// // import reducers from '<project-path>/reducers'
import registerServiceWorker from './registerServiceWorker';
import reducer from './redux/reducer';
import './config';
// import RouterIndex from './RouterIndex';
import Login from './container/login'
import Register from './container/register'
import App from './App';
import Home from './container/Home';
import AppleBasket from './component/Redux/components/AppleBasket';
import RootContainer from './container/Redux';
registerServiceWorker()
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
    ...reducer,
    routing: routerReducer
  })
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk),
    // window.devToolsExtension ? window.devToolsExtension() : f => f,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__
))
/* eslint-enable */
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render( <Provider store={store}>
        <div>
        <Router history={history} >
        <Route path="/" component={RootContainer}>
        <IndexRoute component={Login}/>
        <Route path={"App"} component={App}>
       
            <Route path={'Home'} component={Home}/>
            <Route path={'AppleBasket'} component={AppleBasket}/>

        </Route>
        <Route path={"Register"} component={Register}/>
        <Route path={"Login"} component={Login}/>
        </Route>  
        </Router>
        </div>
</Provider>, document.getElementById('root'));
registerServiceWorker();
