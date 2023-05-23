import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import css from '../SharedLayout/SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink className={css.link} to={'/'}>
          Home
        </NavLink>
        <NavLink className={css.link} to={'/movie'}>
          Movie
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
