/* eslint-disable linebreak-style */
import React from 'react';
const NewBook = () => 
    <div>
      <h2>Add New Book</h2>
      <form>
        <input type="text" placeholder="Book Title" />
        <select>
          <option>Action</option>
        </select>
        <button type='submit'>ADD BOOK</button>
      </form>
    </div>;
export default NewBook;
