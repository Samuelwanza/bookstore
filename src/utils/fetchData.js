import axios from 'axios';

const fetchbooks = async () => {
  const getbooks = await axios.get(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ytx4b5fx2s40aXzhI4zh/books',
  );
  const bookItems = Object.entries(getbooks.data).map(([id, books]) => {
    const [item] = books;
    return { id, ...item };
  });
  return bookItems;
};
export default fetchbooks;
