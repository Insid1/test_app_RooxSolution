import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  SET_SORTING_TYPE: 'SET_SORTING_TYPE',
};

const setSortingType = createAction(ActionType.SET_SORTING_TYPE, (sortingType) => ({
  payload: sortingType,
}));

export { ActionType, setSortingType };
