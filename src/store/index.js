import createBrowserHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { responsiveStoreEnhancer } from 'redux-responsive';
import thunk from 'redux-thunk';

import reducers from '../state/reducers';

const browserHistory = createBrowserHistory();

// Adds the reducer to the store on the `routing` key
const store = () => {
  const storeInstance = createStore(
    reducers,
    compose(
      responsiveStoreEnhancer,
      applyMiddleware(thunk, routerMiddleware(browserHistory), createLogger()),
    ),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../state/reducers', () => {
      storeInstance.replaceReducer(reducers);
    });
  }

  return storeInstance;
};

export default store;
