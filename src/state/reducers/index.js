import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { responsiveStateReducer } from 'redux-responsive';
import { firebaseReducer } from 'react-redux-firebase';
import { navBar } from './navBar';

const reducers = combineReducers({
  browser: responsiveStateReducer,
  firebaseDataStore: firebaseReducer,
  form: formReducer,
  navBar,
  routing: routerReducer,
});

export default reducers;
