import { createSelector } from '@reduxjs/toolkit';
import { selectSortingType } from 'store/interface/selectors';
import type { RootState } from 'store/store';
import { IUser } from 'types/user-types';
import { blankUserData } from 'util/blank-data';
import { sortUsers } from 'util/util';

const selectUsers = (state : RootState) => state.DATA.users;

const selectIsUsersLoaded = (state: RootState) => state.DATA.isUsersLoaded;

const selectUsersLength = (state: RootState) => state.DATA.users.length;

const selectCurrentUser = (state: RootState) => state.DATA.currentUser;

const selectIsCurrentUserLoaded = (state: RootState) => state.DATA.isCurrentUserLoaded;

const selectUserId = (state: RootState, userId: number | string) => userId;

const selectIsFetching = (state: RootState) => state.DATA.isFetching;

const selectIsUserDataSend = (state: RootState) => state.DATA.isUserDataSend;

const selectLoadingError = (state: RootState) => state.DATA.loadingError;

const selectShowNotification = (state: RootState) => state.DATA.showNotification;

const selectUserById = createSelector(
  [selectUsers, selectUserId],
  (users, userId): IUser => (
    users.find((userData) => userData.id === +userId)
    || blankUserData
  ),
);

const selectSortedUsers = createSelector(
  [selectUsers, selectSortingType],
  (users, sortingType) => sortUsers(users, sortingType),
);

export {
  selectUsers, selectIsUsersLoaded, selectUsersLength,
  selectUserById, selectSortedUsers, selectIsFetching,
  selectIsUserDataSend, selectLoadingError, selectShowNotification,
  selectCurrentUser, selectIsCurrentUserLoaded,
};
