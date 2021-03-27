import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import style from './header.module.css';
const HeaderNav = () => {
  return (
    <header>
      <ul className={style.navList}>
        <li>
          <NavLink
            className={style.Links}
            activeClassName={style.navLinksActive}
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={style.Links}
            activeClassName={style.navLinksActive}
            to="/movies"
          >
            MoviesPage
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
export default withRouter(HeaderNav);
