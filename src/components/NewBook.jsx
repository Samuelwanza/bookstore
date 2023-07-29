/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidV4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const NewBook = () => {
  const dispatch = useDispatch();
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

    dispatch(addBook(formValueWithid));

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
          placeholder="author"
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
