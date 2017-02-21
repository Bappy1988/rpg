// React
import React from 'react';
import {render} from 'react-dom';
import 'babel-polyfill';
// Router
import {hashHistory, Router} from 'react-router';
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux';
import getRoutes from './routes';
// Redux
import appReducers from './reducers/index';
import {applyMiddleware, createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const router = routerMiddleware(hashHistory);
let store = createStore(appReducers, enhancers(applyMiddleware(thunk, router)));
const history=syncHistoryWithStore(hashHistory, store);
render(
	<Provider store={store}>
		<Router history={history}>
			{ getRoutes(store) }
		</Router>
	</Provider>,
	document.getElementById('app')
);
