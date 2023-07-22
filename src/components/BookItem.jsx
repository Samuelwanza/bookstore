import React from "react";

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
          <button>Comments</button>
          <button>Remove</button>
          <button>Edit</button>
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
        <button>Update Progress</button>
      </div>
    </div>
  );
};

export default BookItem;
