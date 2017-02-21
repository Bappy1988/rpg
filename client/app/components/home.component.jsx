import React from 'react';
import {Button} from 'react-toolbox';
import {connect} from 'react-redux';
import * as homeActions from '../actions/home.actions';

class Home extends React.Component {
	render() {
		return <div>
			<h3>Home Component</h3>
			<p>This is the home page</p>
			<p>Current time: {this.props.time}</p>
			<Button primary raised onClick={() => this.props.getTime()}>Refresh Time</Button>
		</div>
	}
}

const HomeComponent = connect(
	state => {
		return {
			time: state.home.time
		}
	},
	dispatch => {
		return {
			getTime: () => dispatch(homeActions.requestTime())
		}
	}
)(Home);

export default HomeComponent;