import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import app from './app';

const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  app,
});

export default reducers;
