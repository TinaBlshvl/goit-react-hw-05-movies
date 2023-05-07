import PropTypes from 'prop-types';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';

export const MoviesList = ({ items }) => {
  return (
    <ul>
      {items.map(item => {
        return <MoviesItem key={item.backdrop_path} data={item} />;
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
