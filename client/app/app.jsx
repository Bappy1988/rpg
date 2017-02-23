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
			<Panel style={{display:'flex', flexDirection:'column', height:'100vh'}}>
				<AppBar title="React Starter" />
				<div style={{flex:1, overflowY:'auto', padding:'1.8rem'}}>
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
