import { createSelector } from '@reduxjs/toolkit';
import { selectSortingType } from 'store/interface/selectors';
import { sortUsers } from 'util/util';

const selectUsers = (state) => state.DATA.users;

const selectIsUsersLoaded = (state) => state.DATA.isUsersLoaded;

const selectUsersLength = (state) => state.DATA.users.length;

const selectUserId = (state, userId) => userId;

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
