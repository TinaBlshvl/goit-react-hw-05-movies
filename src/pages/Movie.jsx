import SearchMovie from 'components/Search';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import fetchMovies from 'services/fetch';

const Movie = () => {
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
      const currentMovie = await fetchMovies(
        `${URL}`,
        `&query=${movieName}`
      ).then(res => res.results);
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
      <SearchMovie formValue={submitFormValue} value={movieName} />
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

export default Movie;
