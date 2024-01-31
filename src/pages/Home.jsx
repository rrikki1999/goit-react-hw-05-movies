import React, { useEffect, useState } from 'react';
import { requestTrendingMovies } from '../services/api';
import { MoviesList } from '../components/MoviesList';
import { Loader } from 'components/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => { 
    setIsLoading(true);
    const fetchTrendingMovies = async () => {
      try {
        const response = await requestTrendingMovies();
        setTrendingMovies(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
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
      {isLoading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {trendingMovies.length > 0 && <MoviesList movies={trendingMovies} />}
    </div>
  );
};

export default Home;
