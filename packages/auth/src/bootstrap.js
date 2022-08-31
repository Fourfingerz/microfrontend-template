import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history'; // browser aware vs unaware nav history
import App from './App';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
	const history = defaultHistory || createMemoryHistory({
		initialEntries: [initialPath],
	});

	if (onNavigate) {
		history.listen(onNavigate);
	}

	ReactDOM.render(<App history={history}/>, el);

	// Sync routing navigation MemoryHistory with parent "container"
	return {
		onParentNavigate({ pathname: nextPathname }) {
			const { pathname } = history.location;
			if (pathname !== nextPathname) {
				history.push(nextPathname);
			}
		}
	};
};

// If we are in dev mode and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
	const devRoot = document.querySelector('#_auth-dev-root');

	if (devRoot) {
		// use BrowserHistory if developing app in isolation
		// so devs won't get confused because URLs in browser will
		// update when using back and forward buttons 
		mount(devRoot, { defaultHistory: createBrowserHistory() });
	}
}

// We are running through container 
// and we should export the mount function
export { mount };