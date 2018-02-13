/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import configureStore from './store';
import App from './App';

import './styles/index.scss';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App}>
        {/*<Route path="foo" component={Foo}/>*/}
        {/*<Route path="bar" component={Bar}/>*/}
      </Route>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
