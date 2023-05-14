import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import fetch from 'services/fetch';

import { MovieDetailsContainer } from 'components/MovieDetails/MovieDetails';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

export const MovieDetails = () => {
  const [data, setData] = useState({});
  const [genres, setGenres] = useState('');
  const { id } = useParams();

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const URL = `https://api.themoviedb.org/3/movie/${id}`;

  useEffect(() => {
    // const controller = new AbortController();

    async function fetchData() {
      const currentMovie = await fetch(
        URL
        // {
        // signal: controller.signal,
        // }
      );

      if (currentMovie === undefined) {
        return;
      }
      setData(currentMovie);
      setGenres(() => {
        if (!currentMovie?.genres) {
          return '';
        }
        const genresStr = currentMovie.genres.reduce((acum, genre) => {
          return currentMovie.genres.indexOf(genre) ===
            currentMovie.genres.length - 1
            ? (acum = `${acum} ${genre.name}`)
            : (acum = `${acum} ${genre.name},`);
        }, '');
        return genresStr;
      });
      // console.log(currentMovie);
      return currentMovie;
    }

    fetchData();

    return () => {
      // controller.abort();
    };
  }, [URL]);

  return (
    <div>
      {Object.keys(data).length > 0 && (
        <>
          <Link to={backLinkHref.current}>Go back</Link>
          <MovieDetailsContainer data={data} genres={genres} />
          <MovieInfo />
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
      {Object.keys(data).length === 0 && <p>Sorry, but we found nothing</p>}
    </div>
  );
};
