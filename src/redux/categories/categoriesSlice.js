import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};
const CategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    categoryStatus(state = initialState) {
      state.categories = 'Under construction';
    },
  },
});

export default CategoriesSlice.reducer;
export const { categoryStatus } = CategoriesSlice.actions;
