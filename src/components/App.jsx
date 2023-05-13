import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Cast = lazy(() => import('../components/Cast/Cast'));
const Navigation = lazy(() => import('../components/Navigation/Navigation'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const Home = lazy(() => import('../pages/Home'));
const Movie = lazy(() => import('../pages/Movie'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const NoMovie = lazy(() => import('../pages/NoMovie'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NoMovie />} />
      </Route>
    </Routes>
  );
};
