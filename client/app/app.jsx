import React from 'react';
import {connect} from 'react-redux';
import {AppBar, Layout, Panel} from 'react-toolbox';
import '../theme/theme';

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const {main} = this.props;
		return <Layout>
			<Panel>
				<AppBar title="React Starter" />
				<div style={{display:'flex', flexDirection:'column', flex:1}}>
					{main}
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