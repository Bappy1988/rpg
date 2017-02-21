import React from 'react';
import {IndexRedirect, Route} from 'react-router';
import App from './app';
import HomeComponent from './components/home.component';
import NotFoundComponent from './components/notfound.component';

const getRoutes = (/*store*/) => {
	return <Route path="/" component={App}>
		<IndexRedirect to="/home" />
		<Route path="/home" components={{main:HomeComponent}} />
		<Route path="*" components={{main:NotFoundComponent}} />
	</Route>
};

export default getRoutes;