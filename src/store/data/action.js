import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  LOAD_USERS: 'LOAD_USERS',
  IS_USERS_LOADED: 'IS_USERS_LOADED',
};

const loadUsers = createAction(ActionType.LOAD_USERS, (favoriteOffers) => ({
  payload: favoriteOffers,
}));

const setIsUsersLoaded = createAction(ActionType.IS_USERS_LOADED, (bool) => ({
  payload: Boolean(bool),
}));

export { ActionType, loadUsers, setIsUsersLoaded };
