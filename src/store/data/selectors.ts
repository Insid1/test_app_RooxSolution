import { createSelector } from '@reduxjs/toolkit';
import { selectSortingType } from 'store/interface/selectors';
import type { RootState } from 'store/store';
import { sortUsers } from 'util/util';

const selectUsers = (state : RootState) => state.DATA.users;

const selectIsUsersLoaded = (state: RootState) => state.DATA.isUsersLoaded;

const selectUsersLength = (state: RootState) => state.DATA.users.length;

const selectUserId = (state: RootState, userId: number) => userId;

const selectUserById = createSelector(
  [selectUsers, selectUserId],
  (users, userId) => users.find((userData) => userData.id === +userId),
);

const selectSortedUsers = createSelector(
  [selectUsers, selectSortingType],
  (users, sortingType) => sortUsers(users, sortingType),
);

export {
  selectUsers, selectIsUsersLoaded, selectUsersLength, selectUserById, selectSortedUsers,
};
