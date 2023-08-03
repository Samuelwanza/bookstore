/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidV4 } from 'uuid';
import { postBooks } from '../redux/books/booksSlice';

const NewBook = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.books.status);
  const [formValue, setFormValue] = useState({
    title: '',
    author: '',
    category: '',
  });
  const id = uuidV4();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formValueWithid = { item_id: id, ...formValue };

    dispatch(postBooks(formValueWithid));
    console.log(status);

    setFormValue({ title: '', author: '', category: '' });
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          name="title"
          value={formValue.title}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="author"
          name="author"
          value={formValue.author}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="category"
          name="category"
          value={formValue.category}
          onChange={handleInput}
        />

        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};
export default NewBook;
