import { MovieSearch } from 'components/MovieSearch/MovieSearch';
import fetch from 'services/fetch';

import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const location = useLocation();

  const URL = 'https://api.themoviedb.org/3/search/movie';

  useEffect(() => {
    async function fetchData() {
      if (movieName === '') {
        return;
      }
      const currentMovie = await fetch(`${URL}`, `&query=${movieName}`).then(
        res => res.results
      );
      // console.log(currentMovie);
      setMovies(() =>
        currentMovie.map(({ id, title }) => ({
          id,
          title,
        }))
      );
      return currentMovie;
    }

    fetchData();
  }, [movieName]);

  const submitFormValue = valueForm => {
    valueForm !== ''
      ? setSearchParams({ query: valueForm })
      : setSearchParams({});
  };

  return (
    <>
      <MovieSearch formValue={submitFormValue} value={movieName} />
      <div>
        <ul>
          {movies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`/movie/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
