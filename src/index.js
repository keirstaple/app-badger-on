/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import store from './store';
import Home from './views/containers/Home';

import './styles/index.scss';

import registerServiceWorker from './registerServiceWorker';

const { storeInstance, persistor } = store();
const history = createHistory();

ReactDOM.render(
  <Provider store={storeInstance}>
    <ConnectedRouter history={history}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
            <Route exact path="/" component={Home}>
              {/*<Route path="foo" component={Foo}/>*/}
              {/*<Route path="bar" component={Bar}/>*/}
            </Route>
        </BrowserRouter>
      </PersistGate>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
