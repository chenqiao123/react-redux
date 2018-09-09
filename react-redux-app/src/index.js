import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';

import registerServiceWorker from './registerServiceWorker';
import reducers from './redux/reducer';
import './config';
import RouterIndex from './RouterIndex';
registerServiceWorker()

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render( <Provider store={store}>
        <RouterIndex />
</Provider>, document.getElementById('root'));
registerServiceWorker();
