import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortingType } from 'util/enums';

interface IInitialState {
  sortingType: SortingType
}

const initialState: IInitialState = {
  sortingType: SortingType.BY_CITY,
};

const interfaceSlice = createSlice({
  name: 'INTERFACE',
  initialState,
  reducers: {
    setSortingType(state, action: PayloadAction<SortingType>) {
      state.sortingType = action.payload;
    },
  },
});

export const { setSortingType } = interfaceSlice.actions;
export default interfaceSlice.dataReducer;
