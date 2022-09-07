import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';


// Prevents class name collisions between auto-generated CSS class names 
// ie: jss1 and jss1 from two microfrontends using the same material-ui StylesProvider
const generateClassName = createGenerateClassName({
	productionPrefix: 'ma',  // css styles scoped for 'marketing', hence 'ma'
});

export default ({ history }) => {
	return <div>
		<StylesProvider generateClassName={generateClassName}>
			<Router history={history}>
				<Switch>
					<Route exact path="/pricing" component={Pricing} />
					<Route path="/" component={Landing} />
				</Switch>
			</Router>
		</StylesProvider>
	</div>
};