import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { 
  StylesProvider,
  createGenerateClassName 
} from '@material-ui/core/styles';

import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';

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
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </div>
      </BrowserRouter>
		</StylesProvider>
  );
};