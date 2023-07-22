import { Link, Outlet } from "react-router-dom";
/* eslint-disable linebreak-style */
import style from '../styles/Layout.module.css';

const Layout = () => (
  <div className={style.container}>
    <div className={style.layout}>
      <h1>BookStore CMS</h1>
      <div className="navigation">
        <Link className={`${style.link} ${style.navdecoration}`} to="/">
          Home
        </Link>
        <Link className={`${style.link} ${style.navdecoration}`} to="/category">
          category
        </Link>
      </div>
    </div>
    <div>
      <Outlet />
    </div>
  </div>
);
export default Layout;
