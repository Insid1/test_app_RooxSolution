import { createReducer } from '@reduxjs/toolkit';
import { SortingType } from 'util/const';
import { ActionType } from './action';

const initialState = {
  sortingType: SortingType.BY_CITY,
};

const dataReducer = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.SET_SORTING_TYPE, (state, action) => {
    state.sortingType = action.payload;
  });
});

export default dataReducer;
