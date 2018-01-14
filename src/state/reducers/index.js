import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import navBar from './navBar';

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  navBar,
});

export default reducers;
