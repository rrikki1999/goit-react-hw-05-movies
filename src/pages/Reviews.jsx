import React, { useEffect, useState } from 'react';
import { getReviewsForMovie } from '../services/api';
import { useParams } from 'react-router-dom';
import styles from '../css/Reviews.module.css';
import { Loader } from 'components/Loader';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchMovieReviews = async () => {
      try {
        const response = await getReviewsForMovie(movieId);
        setReviews(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div className={styles.reviewsContainer}>
      <h1 >Movie Reviews</h1>
      {isLoading && <Loader />}
      {error && <p>Something went wrong...</p>}
      <ul className={styles.reviewsList}>
        { reviews.length > 0 ? ( reviews.map(review => (
          <li key={review.id} className={styles.reviewItem}>
            <h3 className={styles.reviewAuthor}>{review.author}</h3>
            <p className={styles.reviewContent}>{review.content}</p>
          </li>
        ))
      ) : ( <p> There are no reviews yet..</p>)}
      </ul>
    </div>
  );
};

export default Reviews;
