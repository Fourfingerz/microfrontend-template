import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // browser aware nav history

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    // Syncing react-router-dom's useHistory between parent 
    // container (this) and child app's MemoryHistory
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        // prevent infinite loop in bi-directional navigation
        // communication between marketing app and upstream container
        // app user path histories
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn
    });

    history.listen(onParentNavigate);
  }, []); // second arg [] forces useEffect to run only on load

  return <div ref={ref} />;
};