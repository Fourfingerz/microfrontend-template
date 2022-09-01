import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { 
  StylesProvider,
  createGenerateClassName 
} from '@material-ui/core/styles';

import Progress from './components/Progress';
import Header from './components/Header';

// Lazy Loading!
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

// Prevents class name collisions between auto-generated CSS class names 
// ie: jss1 and jss1 from two microfrontends using the same material-ui StylesProvider
const generateClassName = createGenerateClassName({
	productionPrefix: 'co',  // css styles scoped for 'container', hence 'co'
});

export default () => {
  // This is a placeholder for ACTUAL user authentication
  // This is just a dummy using minimal React state
  // If you want a fully featured, working sign-in, 
  // with user state, use something like REDUX to manage global state
  // A service like Amazon Cognito also does this out of the box
  // Example: https://github.com/dbroadhurst/aws-cognito-react
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
		<StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
		</StylesProvider>
  );
};