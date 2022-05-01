import { createReducer } from '@reduxjs/toolkit';
import { ActionType } from './action';

const initialState = {
  users: [],
  isUsersLoaded: false,
};

const dataReducer = createReducer(initialState, (builder) => {
  builder.addCase(ActionType.LOAD_USERS, (state, action) => {
    state.users = action.payload;
  });

  builder.addCase(ActionType.IS_USERS_LOADED, (state, action) => {
    state.isUsersLoaded = action.payload;
  });
});

export default dataReducer;
