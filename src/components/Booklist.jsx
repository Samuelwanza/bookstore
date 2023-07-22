/* eslint-disable linebreak-style */
import React from 'react';
import BookItem from './BookItem';
import PropTypes from "prop-types";

const Booklist = ({ items }) => <div>{items.length > 0 && items.map((item) => <BookItem />)}</div>;

Booklist.propTypes={items:PropTypes.array}
export default Booklist;
