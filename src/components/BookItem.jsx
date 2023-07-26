/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({
  Booktype,
  title,
  author,
  completionpercentage,
  chapter,
}) => {
  return (
    <div>
      <div>
        <h4>{Booktype}</h4>
        <h5>{title}</h5>
        <p>{author}</p>
        <div>
          <button type='button'>Comments</button>
          <button type='button'>Remove</button>
          <button type='button'>Edit</button>
        </div>
      </div>
      <div>
        <div></div>
        <div>
          <p>{completionpercentage}</p>
          <p>completed</p>
        </div>
      </div>
      <div>
        <h2>Current chapter</h2>
        <h3>{chapter}</h3>
        <button type='button'>Update Progress</button>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  Booktype: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  completionpercentage: PropTypes.number,
  chapter: PropTypes.string,
};

export default BookItem;
