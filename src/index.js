import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default class ExampleComponent extends Component {
	static propTypes = {
		to: PropTypes.string.isRequired,
		authStatus: PropTypes.bool.isRequired,
		redirectURL: PropTypes.string,
		component: PropTypes.object.isRequired,
		unauthorizedComponent: Proptypes.object,
		exact: PropTypes.bool
	};

	render() {
		const { authStatus, redirectURL, component, nonLoggedInComponent, to } = this.props;

		if (authStatus === false) {
			if (redirectURL.trim().length > 0) {
				return <Redirect to={redirectURL} />;
			} else if (nonLoggedInComponent) {
				return <Route to={to} component={component} />;
			}
		}

		return <Route to={to} component={component} />;
	}
}
