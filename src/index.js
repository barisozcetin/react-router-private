import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';

class PrivateRoute extends Component {
	static propTypes = {
		path: PropTypes.string.isRequired,
		authStatus: PropTypes.bool.isRequired,
		redirectURL: PropTypes.string,
		component: PropTypes.oneOfType([ PropTypes.object, PropTypes.func, PropTypes.node ]).isRequired,
		nonLoggedInComponent: PropTypes.oneOfType([ PropTypes.object, PropTypes.func, PropTypes.node ]),
		exact: PropTypes.bool
	};

	componentDidMount() {
		if (this.props.authStatus !== true) {
			if (this.props.redirectURL) {
				if (this.props.location.pathname === this.props.path) {
					this.props.history.push(this.props.redirectURL);
				}
			}
		}
	}

	render() {
		const {
			authStatus,
			redirectURL,
			component: Component,
			nonLoggedInComponent: NonLoggedInComponent,
			path
		} = this.props;

		if (authStatus === true) {
			return <Route path={path} component={Component} />;
		}

		if (authStatus === false) {
			if (redirectURL) {
				if (redirectURL.trim().length > 0) {
					// return <Redirect to={redirectURL} />;
				}
			} else if (NonLoggedInComponent) {
				return <Route path={path} render={(props) => <NonLoggedInComponent {...props} />} />;
			}
		}

		return <Route path={path} component={Component} />;
	}
}

export default withRouter(PrivateRoute);
