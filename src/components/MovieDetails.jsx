// components/MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useMatch } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';
import { getMovieId } from '../services/api';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieId(movieId);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const match = useMatch();

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>

      <nav>
        <ul>
          <li>
            <Link to={`${match.url}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`${match.url}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default MovieDetails;
