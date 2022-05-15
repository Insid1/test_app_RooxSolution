import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortingType } from 'util/enums';

interface IInitialState {
  sortingType: SortingType,
  isFormActive: boolean,
  CurrentUserId: number,
}

const initialState: IInitialState = {
  sortingType: SortingType.BY_CITY,
  isFormActive: false,
  CurrentUserId: -1,
};

const interfaceSlice = createSlice({
  name: 'INTERFACE',
  initialState,
  reducers: {
    setSortingType(state, action: PayloadAction<SortingType>) {
      state.sortingType = action.payload;
    },
    setIsFormActive(state, action: PayloadAction<boolean>) {
      state.isFormActive = action.payload;
    },
    setCurrentUserId(state, action: PayloadAction<number>) {
      state.CurrentUserId = action.payload;
    },
  },
});

export const { setSortingType, setIsFormActive, setCurrentUserId } = interfaceSlice.actions;
export default interfaceSlice.reducer;
