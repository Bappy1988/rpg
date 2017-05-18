import React from 'react';
import {Button} from 'react-toolbox';
import {connect} from 'react-redux';
import {Row, Col} from './common/grid';
import {Information} from './common/messages.jsx';
import * as homeActions from '../actions/home.actions';

class Home extends React.Component {
	render() {
		return <div>
			<h3>Home Component</h3>
			<Information>This is an information message</Information>
			<Row>
				<Col sm={12} md={6}>
					<p>This is the home page</p>
					<p>It is using a responsive 12-column grid layout</p>
				</Col>
				<Col sm={12} md={6}>
					<p>Current timestamp: {this.props.time}</p>
					<Button primary raised onClick={() => this.props.getTime()}>Refresh Time</Button>
				</Col>
			</Row>
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