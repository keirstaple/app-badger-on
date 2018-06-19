import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { firebaseConnect } from 'react-redux-firebase';

import store from './store';
import Home from './views/containers/Home';
import BadgeSearch from './views/containers/badgeSearch';

import withNavBar from './views/HOCs/withNavBar';

import { DATA_PATHS } from './consts/firebase';

import './styles/index.scss';

import registerServiceWorker from './registerServiceWorker';

const { storeInstance, persistor } = store();
const history = createHistory();

const FireBaseSwitch = firebaseConnect([DATA_PATHS.BADGES])(Switch);

ReactDOM.render(
  <Provider store={storeInstance}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <FireBaseSwitch>
          <Route exact path="/" component={withNavBar(Home)} />
          <Route path="/search/:searchTerm" component={withNavBar(BadgeSearch)} />
        </FireBaseSwitch>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
