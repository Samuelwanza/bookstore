import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books.map((book) => book.id !== action.payload);
    },
  },
});
export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
