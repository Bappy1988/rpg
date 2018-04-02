import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AuthenticatedRoute from 'components/common/authenticated.route';
import Home from './home';
import AdminHome from './admin';
import PlayerHome from './player';
import Viewer from './viewer';
import NotFoundComponent from 'components/notfound';
import '../theme/theme';

class AppComponent extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return <Switch>
			<Route component={Home} exact path="/"/>
			<AuthenticatedRoute component={AdminHome} exact path="/viewer"/>
			<Route component={PlayerHome} exact path="/player"/>
			<Route component={Viewer} exact path="/viewer"/>
			<Route component={NotFoundComponent} />
		</Switch>
	}
}

export default AppComponent;
