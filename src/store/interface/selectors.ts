import type { RootState } from 'store/store';

const selectSortingType = (state: RootState) => state.INTERFACE.sortingType;

// eslint-disable-next-line import/prefer-default-export
export { selectSortingType };
