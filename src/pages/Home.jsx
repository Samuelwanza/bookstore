import React from 'react';
import style from '../styles/Home.module.css';
import NewBook from '../components/NewBook';
import Booklist from '../components/Booklist';
;

const Home = () => {
  
  return (
    <div className={style.home}>
      <Booklist  />
      <NewBook />
    </div>
  );
};
export default Home;
