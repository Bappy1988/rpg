import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';

const AuthenticatedRoute = ({component: Component, ...rest}) => <Route {...rest} render={
	props => {
		return rest.loggedIn
			? <Component {...props} />
			: <Redirect to={{
				pathname: rest.redirect,
				state: {
					from: props.location
				}
			}} />
	}
} />;

AuthenticatedRoute.propTypes = {
	component: PropTypes.any.isRequired,
	exact: PropTypes.bool,
	path: PropTypes.string,
	redirect: PropTypes.string.isRequired
};

export default connect(
	state => {
		return {
			loggedIn: state.auth.loggedIn
		}
	}
)(AuthenticatedRoute);