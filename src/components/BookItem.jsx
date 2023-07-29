/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookItem = ({ bookitem }) => {
  const dispatch = useDispatch();

  return (
    <div key={bookitem.item_id}>
      <div>
        <h4>{bookitem.category}</h4>
        <h5>{bookitem.title}</h5>
        <p>{bookitem.author}</p>
        <div>
          <button
            type="button"
            onClick={() => dispatch(removeBook(bookitem.item_id))}
          >
            Remove
          </button>
        </div>
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
