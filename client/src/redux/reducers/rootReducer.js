import { combineReducers } from 'redux';
import { toyReducer } from './toyRedusers';
import { userReducer } from './userReducers';

export const rootReducer = combineReducers({
  toyReducer,
  userReducer,
});
