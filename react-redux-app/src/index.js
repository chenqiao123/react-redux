import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Router, Route, browserHistory,IndexRoute} from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import './config';
import Login from './container/login'
import Register from './container/register'
import App from './App';
import Home from './container/Home';
// ui组件,用于路由的
import AppleBasket from './component/redux/components/AppleBasket';


// 所有的渲染reducer
import appleBasketReducer from './component/redux/reducers/appleBasketReducer';
import HomeRootReducer from './container/Home/indexRedux';
import reducer from './redux/reducer'//外面合并还有问题
registerServiceWorker()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({

appleBasket:appleBasketReducer,
HomeRoot:HomeRootReducer,
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
        <Router history={history} >
        <Route path="/" >
        <IndexRoute component={Login}/>
        <Route path={"App"} component={App}>
            <Route path={'Home'} component={Home}/>
            <Route path={'AppleBasket'} component={AppleBasket}/>
        </Route>
        <Route path={"Register"} component={Register}/>
        <Route path={"Login"} component={Login}/>
        </Route>  
        </Router>
       
</Provider>, document.getElementById('root'));
registerServiceWorker();
