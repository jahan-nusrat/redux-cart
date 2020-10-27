import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute ({ children, ...rest }) {
	const userDetails= useSelector(state=>state.userInfo)
	return (
		<Route
			{...rest}
			render={({ location }) =>
				userDetails.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname : '/login',
							state    : { from: location }
						}}
					/>
				)}
		/>
	);
}

export default PrivateRoute;