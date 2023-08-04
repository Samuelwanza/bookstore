/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBooks } from '../redux/books/booksSlice';
import style from '../styles/BookItem.module.css';

const BookItem = ({ bookitem }) => {
  const dispatch = useDispatch();

  return (
    <div key={bookitem.id} className={style.bookContainer}>
      <div className={style.bookdetails}>
        <h4>{bookitem.category}</h4>
        <h5>{bookitem.title}</h5>
        <p>{bookitem.author}</p>
        <div className={style.buttons}>
          <button type="button">Comments</button>
          <button
            type="button"
            onClick={() => dispatch(deleteBooks(bookitem.id))}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className={style.percentageContainer}>
        <div className={style.circle} />
        <div className={style.percentage}>
          <p>64%</p>
          <span>Completed</span>
        </div>
      </div>
      <div className={style.separator} />
      <div className={style.progress}>
        <h2>CURRENT CHAPTER</h2>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  bookitem: {
    category: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  },
};
BookItem.defaultProps = {
  bookitem: {
    category: '',
    title: '',
    author: '',
  },
};

export default BookItem;
