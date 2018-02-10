import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { responsiveStateReducer } from 'redux-responsive';
import navBar from './navBar';

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  browser: responsiveStateReducer,
  navBar,
});

export default reducers;
