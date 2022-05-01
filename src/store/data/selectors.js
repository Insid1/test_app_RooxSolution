import { createSelector } from '@reduxjs/toolkit';

const selectUsers = (state) => state.DATA.users;

const selectIsUsersLoaded = (state) => state.DATA.isUsersLoaded;

const selectUsersLength = (state) => state.DATA.users.length;

const selectUserId = (state, userId) => userId;

const selectUserById = createSelector(
  [selectUsers, selectUserId],
  (users, userId) => users.find((userData) => userData.id === +userId),
);

export {
  selectUsers, selectIsUsersLoaded, selectUsersLength, selectUserById,
};
