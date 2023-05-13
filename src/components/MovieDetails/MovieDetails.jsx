import PropTypes from 'prop-types';

export const MovieDwtails = ({ movie, genres }) => {
  return (
    <section>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="Movie image"
          width="250"
          height="350"
        />
      </div>

      <div>
        <h1>
          {Object.keys(movie).length !== 0 &&
            `${movie.original_title} (${movie.release_date.split('-', 1)})`}
        </h1>
        <div>User score: {Math.round(movie.vote_average * 10)}%</div>
        <div>
          <h2>Overview</h2>
          <span>{movie && movie.overview}</span>
        </div>
        <div>
          <h2>Genres</h2>
          {genres}
        </div>
      </div>
    </section>
  );
};

MovieDwtails.propTypes = {
  movie: PropTypes.object.isRequired,
  genres: PropTypes.string.isRequired,
};
