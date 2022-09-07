import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

// Prevents class name collisions between auto-generated CSS class names 
// ie: jss1 and jss1 from two microfrontends using the same material-ui StylesProvider
const generateClassName = createGenerateClassName({
	productionPrefix: 'au',  // css styles scoped for 'auth', hence 'au'
});

export default ({ history, onSignIn }) => {
	return <div>
		<StylesProvider generateClassName={generateClassName}>
			<Router history={history}>
				<Switch>
					<Route path="/auth/signin">
						<Signin onSignIn={onSignIn} />
					</Route>
					<Route path="/auth/signup">
						<Signup onSignIn={onSignIn} />
					</Route>
				</Switch>
			</Router>
		</StylesProvider>
	</div>
};