import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

export const RenderApp = () => {
	return (
		<Switch>
			<Route
				path={`/`}
				exact
				render={(props) => {
					return <Layout {...props} nofilter />;
				}}
			/>
			<Route
				path={`/filters`}
				exact
				render={(props) => {
					return <Layout {...props}  />;
				}}
			/>
			<Route component={() => <h1>Not Found!</h1>} />
		</Switch>
	);
};

