import { combineReducers } from '@reduxjs/toolkit';
import dataReducer from './data/reducer';
import interfaceReducer from './interface/reducer';

const ReducerName = {
  DATA: 'DATA',
  INTERFACE: 'INTERFACE',
};

const rootReducer = combineReducers({
  [ReducerName.DATA]: dataReducer,
  [ReducerName.INTERFACE]: interfaceReducer,

});

export default rootReducer;
