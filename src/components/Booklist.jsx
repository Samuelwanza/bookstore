/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/booksSlice';
import BookItem from './BookItem';
import style from '../styles/Booklist.module.css';

const Booklist = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.books.books);
  console.log(list);
  useEffect(() => {
    dispatch(getBooks()).then((action) => {
      if (action.payload) {
        console.log(action.payload);
      } else {
        console.log('not approached');
      }
    });
  }, [dispatch]);
  return (
    <div className={style.booklist}>
      {list && list.map((item) => <BookItem key={item.id} bookitem={item} />)}
    </div>
  );
};
export default Booklist;
