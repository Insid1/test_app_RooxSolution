import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { IUser } from 'types/user-types';
import { fetchUsers, postUser } from './api-actions';

interface IInitialState {
  users: IUser[],
  isUsersLoaded: boolean,
  loadingError: string,
  isUserDataSend: boolean,
  isFetching: boolean,
  showNotification: boolean,
}

const initialState: IInitialState = {
  users: [],
  isUsersLoaded: false,
  loadingError: '',
  isUserDataSend: true,
  isFetching: false,
  showNotification: false,
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
    setLoadingError(state, action: PayloadAction<string>) {
      state.loadingError = action.payload;
    },
    setIsUserDataSend(state, action: PayloadAction<boolean>) {
      state.isUserDataSend = action.payload;
    },
    setIsFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
    setShowNotification(state, action: PayloadAction<boolean>) {
      state.showNotification = action.payload;
    },
  },
  extraReducers(builder) {
    // builder.addCase(fetchUsers.pending, (state) => {
    //   state.isUsersLoaded = false;
    // });

    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
      state.isUsersLoaded = true;
      state.users = action.payload;
    });

    builder.addCase(postUser.fulfilled, (state, action: PayloadAction<IUser>) => {
      state.isUserDataSend = true;
      state.showNotification = true;
      console.log(action.payload);
    });

    builder.addCase(postUser.pending, (state) => {
      state.loadingError = '';
      state.isFetching = true;
      state.showNotification = false;
    });

    builder.addCase(postUser.rejected, (state) => {
      state.isFetching = false;
      state.isUserDataSend = false;
      state.loadingError = 'error occurred!';
      state.showNotification = true;
    });
  },
});

export const {
  loadUsers, setIsUsersLoaded, setLoadingError, setIsUserDataSend, setIsFetching,
} = dataSlice.actions;
export default dataSlice.reducer;
