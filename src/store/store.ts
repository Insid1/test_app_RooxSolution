import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './data/data-slice';
import interfaceReducer from './interface/interface-slice';

enum ReducerName {
  DATA = 'DATA',
  INTERFACE = 'INTERFACE',
}

const store = configureStore({
  reducer: {
    [ReducerName.DATA]: dataReducer,
    [ReducerName.INTERFACE]: interfaceReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
