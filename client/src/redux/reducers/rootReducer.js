import { combineReducers } from 'redux';
import { toyReducer } from './toyReducers';
import { userReducer } from './userReducers';
import {cartReducer} from './cartReducers';

export const rootReducer = combineReducers({
  toyReducer,
  userReducer,
  cartReducer,
});
