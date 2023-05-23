import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesItem = ({ data: { id, title } }) => {
  return (
    <li>
      <Link to={`movie/${id}`}>{title}</Link>
    </li>
  );
};

MoviesItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MoviesItem;
