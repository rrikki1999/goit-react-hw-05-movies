import React, { useState, useEffect } from 'react';
import { Form, useSearchParams } from 'react-router-dom';
import { searchMovies } from '../services/api';
import styles from '../css/Movies.module.css';
import { MoviesList } from '../components/MoviesList';
import { Loader } from 'components/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [previousQuery, setPreviousQuery] = useState('');
  const [error, setError] = useState('');

  const query = searchParams.get('sQuery');

  useEffect(() => {
    const searchMovie = async () => {
      try {
        setIsLoading(true);
        if (query && query.trim() !== '') {
          setMovies([]);
          setPreviousQuery(query);
          const data = await searchMovies(query);
          if (Array.isArray(data.results)) {
            setMovies(data.results);
          }
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    searchMovie();
  }, [query]);

  const searchSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.query.value.trim();
    setSearchParams({
      sQuery: searchValue,
    });
  };

  return (
    <div className={styles.moviesContainer}>
      <h1>Search Movies</h1>
      {isLoading && <Loader />}
      {error && <p>Something went wrong...</p>}
      

      <Form onClick={searchSubmit}/>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
};

export default Movies;
