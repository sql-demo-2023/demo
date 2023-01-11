import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppState, AppThunk } from '../../store/store';
import { fetchCategory } from './categoryAPI';

export interface CategoryState {
  value: string;
}
const initialState: CategoryState = {
  value: '',
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    updateCategory: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = '';
    },
  },
});
export const { updateCategory, reset } = categorySlice.actions;
export const selectCategory = (state: AppState) => state.category.value;

export default categorySlice.reducer;
