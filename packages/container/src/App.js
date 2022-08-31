import React, { lazy, Suspense } from 'react';
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
  return (
		<StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={AuthLazy} />
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
		</StylesProvider>
  );
};