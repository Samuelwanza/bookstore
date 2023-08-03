import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import fetchData from '../../utils/fetchData';

const initialState = {
  books: [],
  status: 'idle',
};

const getBooks = createAsyncThunk('books/get', async () => {
  const response = await fetchData();
  return response;
});

const postBooks = createAsyncThunk('books/post', async (requestData) => {
  await axios.post(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ytx4b5fx2s40aXzhI4zh/books',
    requestData,
  );
  const response = await fetchData();
  return response;
});

const deleteBooks = createAsyncThunk('books/delete', async (id) => {
  await axios.delete(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ytx4b5fx2s40aXzhI4zh/books/${id}`,
  );
  const response = await fetchData();
  return response;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.status = 'success';
      state.books = action.payload;
    });
    builder.addCase(getBooks.rejected, (state) => {
      state.status = 'failed';
    });

    builder.addCase(postBooks.fulfilled, (state, action) => {
      state.status = 'success';
      state.books = action.payload;
    });

    builder.addCase(postBooks.rejected, (state) => {
      state.status = 'failed';
    });

    builder.addCase(deleteBooks.fulfilled, (state, action) => {
      state.status = 'success';
      state.books = action.payload;
    });

    builder.addCase(deleteBooks.rejected, (state) => {
      state.status = 'failed';
    });
  },
});

export { getBooks, postBooks, deleteBooks };
export default booksSlice.reducer;
