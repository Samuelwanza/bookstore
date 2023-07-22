import React from "react";
import BookItem from "./BookItem";

const Booklist = ({ items }) => {
  return <div>{items.length > 0 && items.map((item) => <BookItem />)}</div>;
};

export default Booklist;
