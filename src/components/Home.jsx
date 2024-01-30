import React, { useEffect, useState } from 'react';
import { requestTrendingMovies } from '../services/api';
import { MoviesList } from './Movies';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await requestTrendingMovies();
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  const titleStyle = {
    color: '#2C2B2B',
    fontSize: '24px',
    paddingLeft: '50px',
  };

  return (
    <div>
      <h1 style={titleStyle}>Trending Movies</h1>
      <MoviesList movies={trendingMovies} />
    </div>
  );
};

export default Home;
