import PropTypes from 'prop-types';
import MoviesItem from 'components/MoviesItem';

const ListMovies = ({ moviesArr }) => {
  return (
    <ul>
      {moviesArr.map(data => {
        return <MoviesItem key={data.backdrop_path} data={data} />;
      })}
    </ul>
  );
};

ListMovies.propTypes = {
  moviesArr: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListMovies;
