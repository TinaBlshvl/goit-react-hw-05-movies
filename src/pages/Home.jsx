import { useEffect, useState } from 'react';
import ListMovies from 'components/MovieList';
import fetchMovies from 'services/fetch';

const URL = 'https://api.themoviedb.org/3/trending/movie/week';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const asd = await fetchMovies(URL);
      setMovies([...asd.results]);
    }

    fetchData();
  }, []);

  return (
    <>
      <ListMovies moviesArr={movies} />
    </>
  );
};

export default Home;
