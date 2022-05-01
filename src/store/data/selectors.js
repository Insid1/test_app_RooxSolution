const selectUsers = (state) => state.DATA.users;

const selectIsUsersLoaded = (state) => state.DATA.isUsersLoaded;

const selectUsersLength = (state) => state.DATA.users.length;

export { selectUsers, selectIsUsersLoaded, selectUsersLength };
