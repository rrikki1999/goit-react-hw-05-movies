import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../services/api';
import styles from '../css/Movies.module.css';
import { MoviesList } from '../components/MoviesList';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = useCallback(async (query = '') => {
    try {
      const response = await searchMovies(query);
      setSearchResults(response.data.results);
      setSearchParams({ query }); 
    } catch (error) {
      setError(error);
    }
  }, [setSearchParams]);

  useEffect(() => {
    const queryParam = searchParams.get('query');
    if (queryParam) {
      setSearchQuery(queryParam);
      handleSearch(queryParam);
    }
  }, [searchParams, handleSearch]);

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSearch(searchQuery);
    }
  };

  return (
    <div className={styles.moviesContainer}>
      <h1>Search Movies</h1>
      {error && <p>Something went wrong...</p>}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Enter movie title"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className={styles.searchInput}
        />
        <button onClick={() => handleSearch(searchQuery)} className={styles.searchButton}>
          Search
        </button>
      </div>
      {searchResults.length > 0 && <MoviesList movies={searchResults} />}
    </div>
  );
};

export default Movies;
