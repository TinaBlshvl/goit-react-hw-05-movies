import PropTypes from 'prop-types';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const ContainerMovie = ({ data, genres }) => {
  return (
    <>
      <div>
        <div>
          <img
            src={`${IMG_URL}${data.poster_path}`}
            alt="Poster Movie"
            width="200"
            height="300"
          />
        </div>

        <div>
          <h1>
            {Object.keys(data).length !== 0 &&
              `${data.original_title} (${data.release_date.split('-', 1)})`}
          </h1>
          <div>User score: {Math.round(data.vote_average * 10)}%</div>
          <div>
            <p>Overview</p>
            <span>{data && data.overview}</span>
          </div>
          <div>
            <p>Genres</p>
            {genres}
          </div>
        </div>
      </div>
    </>
  );
};

ContainerMovie.propTypes = {
  data: PropTypes.object.isRequired,
  genres: PropTypes.string.isRequired,
};

export default ContainerMovie;
