import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from '../MoviesItem/MoviesItem.module.css';

export const MoviesItem = ({ id, title }) => {
  return (
    <li className={css.li}>
      <Link to={`movies/${id}`}>{title}</Link>
    </li>
  );
};

MoviesItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
