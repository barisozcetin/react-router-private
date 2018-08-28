import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default class ExampleComponent extends Component {
	static propTypes = {
		path: PropTypes.string.isRequired,
		authStatus: PropTypes.bool.isRequired,
		redirectURL: PropTypes.string,
		component: PropTypes.oneOfType([ PropTypes.object, PropTypes.func, PropTypes.node ]).isRequired,
		nonLoggedInComponent: PropTypes.oneOfType([ PropTypes.object, PropTypes.func, PropTypes.node ]),
		exact: PropTypes.bool
	};

	render() {
		const { authStatus, redirectURL, component, nonLoggedInComponent, path } = this.props;

		if (authStatus === true) {
			return <Route path={path} component={component} />;
		}

		if (authStatus === false) {
			if (redirectURL.trim().length > 0) {
				return <Redirect to={redirectURL} />;
			} else if (nonLoggedInComponent) {
				return <Route path={path} component={component} />;
			}
		}

		return <Route path={path} component={component} />;
	}
}
