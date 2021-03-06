import { combineReducers } from 'redux';
import uiState from './uiState';
import userState from './userState';

const reducers = {
  uiState,
  userState,
};

export default combineReducers(reducers);
