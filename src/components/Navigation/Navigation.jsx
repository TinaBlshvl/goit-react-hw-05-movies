import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/movie'}>Movie</NavLink>
      </nav>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
