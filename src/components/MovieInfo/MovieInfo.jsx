import { Link } from 'react-router-dom';

export const MovieInfo = () => {
  return (
    <div>
      <h1>Additional information</h1>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </div>
  );
};
