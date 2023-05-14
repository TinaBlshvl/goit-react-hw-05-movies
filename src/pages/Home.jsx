import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import fetch from 'services/fetch';
const URL = 'https://api.themoviedb.org/3/trending/movie/week';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const asd = await fetch(URL);
      setMovies([...asd.results]);
    }

    fetchData();
  }, []);

  return (
    <>
      <MoviesList items={movies} />
    </>
  );
};
