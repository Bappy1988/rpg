import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {AppBar, Layout, Panel} from 'react-toolbox';
import AuthenticatedRoute from 'components/common/authenticated.route';
import HomeComponent from 'components/home';
import NotFoundComponent from 'components/notfound';
import '../theme/theme';

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return <Layout>
			<Panel style={{display:'flex', flexDirection:'column', height:'100vh'}}>
				<AppBar title="React Starter" />
				<div style={{flex:1, overflowY:'auto', padding:'1.8rem'}}>
					<Switch>
						<Route component={HomeComponent} exact path="/" />
						<AuthenticatedRoute component={HomeComponent} path="/secret" redirect="/login" />
						<Route component={NotFoundComponent} />
					</Switch>
				</div>
			</Panel>
		</Layout>
	}
}

const AppComponent = connect(
	() => {
		return {

		}
	},
	() => {
		return {

		}
	}
)(App);

export default AppComponent;
