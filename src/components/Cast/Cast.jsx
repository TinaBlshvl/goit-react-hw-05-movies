import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovies from 'services/fetch';
import css from '../Cast/Cast.module.css';

const Cast = () => {
  const { id } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${id}/credits`;
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetchMovies(URL);
      if (res === undefined) {
        return;
      }
      setActors(() => {
        return res.cast
          .filter(
            ({ known_for_department }) => known_for_department === 'Acting'
          )
          .map(({ name, character, profile_path }) => {
            return {
              name,
              character,
              profile_path,
            };
          });
      });
      return res.cast;
    }
    fetchData();
  }, [URL]);

  return (
    <>
      <div>
        {actors.length > 0 && (
          <ul className={css.container}>
            {actors.map(({ name, character, profile_path }) => {
              return (
                <li key={name}>
                  <div>
                    <img
                      src={profile_path && `${IMG_URL}${profile_path}`}
                      alt="Actor's pic"
                      width="100"
                      height="120"
                    />
                  </div>

                  <p>{name}</p>
                  <p>Character: {character}</p>
                </li>
              );
            })}
          </ul>
        )}
        {actors.length === 0 && <div>We found nothing! Try again!</div>}
      </div>
    </>
  );
};

export default Cast;
