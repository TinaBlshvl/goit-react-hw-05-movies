import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovies from 'services/fetch';

const Reviews = () => {
  const { id } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${id}/reviews`;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetchMovies(URL);
      // console.log(res.results);
      setReviews(() => {
        return res.results.map(({ id, author, content }) => ({
          id,
          author,
          content,
        }));
      });
      return res.cast;
    }
    fetchData();
  }, [URL]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <>
                <div>
                  <spsn>Author</spsn>: {author}
                </div>
                <p>'{content}'</p>
              </>
            </li>
          ))}
        </ul>
      ) : (
        <p>We found nothing! Try again!</p>
      )}
    </div>
  );
};

export default Reviews;
