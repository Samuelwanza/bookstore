/* eslint-disable linebreak-style */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IoIosPerson } from 'react-icons/io';
import style from '../styles/Layout.module.css';

const Layout = () => (
  <div className={style.container}>
    <div className={style.layout}>
      <div className={style.navigation}>
        <h1>BookStore CMS</h1>
        <Link className={`${style.link} `} to="/">
          Home
        </Link>
        <Link className={`${style.link} ${style.navdecoration}`} to="/category">
          category
        </Link>
      </div>
      <div className={style.oval}>
        <IoIosPerson className={style.mask} />
      </div>
    </div>
    <div>
      <Outlet />
    </div>
  </div>
);
export default Layout;
