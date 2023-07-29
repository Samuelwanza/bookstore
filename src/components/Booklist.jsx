/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import BookItem from './BookItem';

const Booklist = () => {
  const list = useSelector((state) => state.books.books);
  return <div>{list && list.map((item) => <BookItem bookitem={item} />)}</div>;
};
export default Booklist;
