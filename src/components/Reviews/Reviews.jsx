import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetch from 'services/fetch';

export const Reviews = () => {
  const { id } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${id}/reviews`;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(URL);
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
                  <span>Author</span>: {author}
                </div>
                <p>'{content}'</p>
              </>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, but we can't find it!</p>
      )}
    </div>
  );
};
