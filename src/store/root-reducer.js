import { combineReducers } from '@reduxjs/toolkit';
import dataReducer from './data/reducer';

const ReducerName = {
  DATA: 'DATA',
};

const rootReducer = combineReducers({
  [ReducerName.DATA]: dataReducer,

});

export default rootReducer;
