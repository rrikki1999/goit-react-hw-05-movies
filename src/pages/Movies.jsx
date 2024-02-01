import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../services/api';
import styles from '../css/Movies.module.css';
import { MoviesList } from '../components/MoviesList';
import { Loader } from 'components/Loader';
import FormMovies from 'components/FormMovies';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const query = searchParams.get('sQuery');
  // axios.defaults.baseURL = 'https://api.themoviedb.org/3';
  // const API_KEY = 'f8a2c74c619ae47b0575baa7c8b50025';

  // export const getTrending = async () => {
  //   const response = await axios.get(`/trending/all/week?api_key=${API_KEY}`);
  //   return response.data.results;
  // };
  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    const searchMovie = async () => {
      try {
        const data = await searchMovies(query);
        if (Array.isArray(data.results)) {
          setMovies(data.results);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    searchMovie();
  }, [query]);

  const handleSubmit = value => {
    setSearchParams({
      sQuery: value,
    });
  };

  return (
    <div className={styles.moviesContainer}>
      <h1>Search Movies</h1>
      {isLoading && <Loader />}
      {error && <p>Something went wrong...</p>}

      <FormMovies handleSubmit={handleSubmit} />

      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default Movies;
