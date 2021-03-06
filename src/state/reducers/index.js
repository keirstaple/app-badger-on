import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { responsiveStateReducer } from 'redux-responsive';
import { firebaseReducer } from 'react-redux-firebase';

import { navBar } from './navBar';
import { badges } from './badges';

const reducers = combineReducers({
  browser: responsiveStateReducer,
  firebaseDataStore: firebaseReducer,
  form: formReducer,
  navBar,
  badges,
  routing: routerReducer,
});

export default reducers;
