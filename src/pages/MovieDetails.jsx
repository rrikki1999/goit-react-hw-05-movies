import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import {
  NavLink,
  Route,
  Routes,
  useParams,
  useLocation,
} from 'react-router-dom';

import { getMovieId } from '../services/api';

import styles from '../css/MovieDetails.module.css';
import navigationStyles from '../css/NavigationStyles.module.css';
import { Loader } from 'components/Loader';

const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

const MovieDetails = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieId(movieId);
        setMovie(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);


  const {
    title,
    name,
    original_title,
    overview,
    poster_path,
    release_date,
    vote_average,
    genres,
  } = movie;

  const defaultImg =
    'https://via.placeholder.com/500x600?text=No+Image+Available';

  return (
    <div className={styles.movieDetailsContainer}>
      <NavLink
        className={({ isActive }) => {
          return isActive
            ? [navigationStyles.navigationLink, navigationStyles.active].join(
                ' '
              )
            : navigationStyles.navigationLink;
        }}
        to={backLinkRef.current}
      >
        Go back
      </NavLink>
      {isLoading && <Loader />}
      {error && <p>Something went wrong...</p>}
      <div className={styles.movieDetails}>
        <img
          className={styles.moviePoster}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w200${poster_path}`
              : defaultImg
          }
          alt={title || name || original_title}
        />
        <div className={styles.movieInfoContainer}>
          <h1 className={styles.movieTitle}>
            {title || name || original_title}
          </h1>
          <p className={styles.movieRelease}>Release date: {release_date}</p>
          <p className={styles.movieRating}>Rating: {vote_average}</p>
          <p className={styles.movieOverview}>{overview}</p>
          <p className={styles.movieGenres}>
            Genres:{' '}
            {genres?.map(genre => (
              <span key={genre.id} className={styles.genre}>
                {genre.name}
              </span>
            ))}
          </p>
        </div>
      </div>

      <h3 className={styles.title}>Additional information</h3>

      <nav>
        <ul className={styles.navigationList}>
          <li className={styles.navigationItem}>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? [
                      navigationStyles.navigationLink,
                      navigationStyles.active,
                    ].join(' ')
                  : navigationStyles.navigationLink;
              }}
              to={`/movies/${movieId}/cast`}
            >
              Cast
            </NavLink>
          </li>
          <li className={styles.navigationItem}>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? [
                      navigationStyles.navigationLink,
                      navigationStyles.active,
                    ].join(' ')
                  : navigationStyles.navigationLink;
              }}
              to={`/movies/${movieId}/reviews`}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetails;
