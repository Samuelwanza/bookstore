import React from "react";
import style from "../styles/Home.module.css";
import NewBook from "../components/NewBook";
import Booklist from "../components/Booklist";

const Home = () => {
  const list = [];
  return (
    <div className={style.home}>
      <Booklist items={list} />
      <NewBook />
    </div>
  );
};
export default Home;
