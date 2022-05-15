import type { RootState } from 'store/store';

const selectSortingType = (state: RootState) => state.INTERFACE.sortingType;

const selectIsFormActive = (state: RootState) => state.INTERFACE.isFormActive;

const selectCurrentUserId = (state: RootState) => state.INTERFACE.CurrentUserId;

export { selectSortingType, selectIsFormActive, selectCurrentUserId };
