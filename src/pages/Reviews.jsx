import React, { useEffect, useState } from 'react';
import { getReviewsForMovie } from '../services/api';
import { useParams } from 'react-router-dom';
import styles from '../css/Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await getReviewsForMovie(movieId);
        setReviews(response.data.results);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <div className={styles.reviewsContainer}>
      <h1 >Movie Reviews</h1>
      <ul className={styles.reviewsList}>
        {reviews.map(review => (
          <li key={review.id} className={styles.reviewItem}>
            <h3 className={styles.reviewAuthor}>{review.author}</h3>
            <p className={styles.reviewContent}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
