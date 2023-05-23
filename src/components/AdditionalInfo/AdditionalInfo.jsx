import { Link } from 'react-router-dom';
import css from '../AdditionalInfo/AdditionalInfo.module.css';

const AdditionalInfo = () => {
  return (
    <div className={css.aditionalContainer}>
      <p className={css.aditionalText}>Additional information</p>
      <ul>
        <li className={css.aditionalLi}>
          <Link className={css.link} to="cast">
            Cast
          </Link>
        </li>
        <li className={css.aditionalLi}>
          <Link className={css.link} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInfo;
