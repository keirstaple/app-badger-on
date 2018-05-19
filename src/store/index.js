import createBrowserHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import { responsiveStoreEnhancer } from 'redux-responsive';
import { reactReduxFirebase } from 'react-redux-firebase';
import firebase from 'firebase';
import thunk from 'redux-thunk';

import reducers from '../state/reducers';
import firebaseConfig from './firebaseConfig';
import { DATA_PATHS } from '../consts/firebase';

firebase.initializeApp(firebaseConfig);

const browserHistory = createBrowserHistory();
const reactReduxFirebaseConfig = {
  userProfile: DATA_PATHS.USERS,
};

// Adds the reducer to the store on the `routing` key
const store = () => {
  /* eslint-disable no-underscore-dangle */
  const createStoreWithFirebase = compose(reactReduxFirebase(firebase, reactReduxFirebaseConfig))(createStore);
  const storeInstance = createStoreWithFirebase(
    reducers,
    compose(
      responsiveStoreEnhancer,
      applyMiddleware(thunk, routerMiddleware(browserHistory), createLogger()),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
  /* eslint-enable */

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../state/reducers', () => {
      storeInstance.replaceReducer(reducers);
    });
  }

  const persistor = persistStore(storeInstance);

  return { storeInstance, persistor };
};

export default store;
