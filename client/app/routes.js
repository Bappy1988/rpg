import React from 'react';
import {IndexRedirect, Route} from 'react-router';
import App from './app';
import HomeComponent from './components/home.component';
import NotFoundComponent from './components/notfound.component';
import * as authSelectors from './selectors/auth.selectors';

const getRoutes = (store) => {
	const requireAuth = (nextState, replace) => {
		const state = store.getState();
		if(!authSelectors.selectIsLoggedIn(state)) {
			replace({pathname: '/home'});
		}
	};
	return <Route path="/" component={App}>
		<IndexRedirect to="/home" />
		<Route path="/home" components={{main:HomeComponent}} />
		<Route path="/secret" components={{main:HomeComponent}} onEnter={(n, r) => requireAuth(n, r)} />
		<Route path="*" components={{main:NotFoundComponent}} />
	</Route>
};

export default getRoutes;