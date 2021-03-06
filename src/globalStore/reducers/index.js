import { combineReducers } from 'redux';
import uiState from './uiState';
import userState from './userState';
import testData from './testData';

const reducers = {
  uiState,
  userState,
  testData,
};

export default combineReducers(reducers);
