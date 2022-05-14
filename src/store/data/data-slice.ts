import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IUser } from 'types/user-types';
import { fetchUsers, postUser } from './api-actions';

interface IInitialState {
  users: IUser[],
  isUsersLoaded: boolean,
}

const initialState: IInitialState = {
  users: [],
  isUsersLoaded: false,
};

const dataSlice = createSlice({
  name: 'DATA',
  initialState,
  reducers: {
    loadUsers(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
    setIsUsersLoaded(state, action: PayloadAction<boolean>) {
      state.isUsersLoaded = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isUsersLoaded = false;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
      state.isUsersLoaded = true;
      state.users = action.payload;
    });
    builder.addCase(postUser.fulfilled, (state, action: PayloadAction<IUser[]>) => {
      console.log(action.payload);
    });
  },
});

export const { loadUsers, setIsUsersLoaded } = dataSlice.actions;
export default dataSlice.dataReducer;
