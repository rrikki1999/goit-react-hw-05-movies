import axios from 'axios';
// key = 7307c77377e4ea477963b1148465616b

const KEY = '7307c77377e4ea477963b1148465616b';
const url = 'https://api.themoviedb.org/3/';
export const AUTH_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzA3Yzc3Mzc3ZTRlYTQ3Nzk2M2IxMTQ4NDY1NjE2YiIsInN1YiI6IjY1YjQzYWZjMGMwYjM4MDE2M2Y5YzZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0ET2hOjdtO2t_V1Tb7cCSTEDIHSmXfHbIEXJ5muNOFg';

//Get the trending movies, TV shows and people

export const requestTrendingMovies = async () => {
  const options = {
    method: 'GET',
    url: `${url}/trending/movie/day`,
    params: { language: 'en-US', api_key: KEY },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`,
    },
  };
  const data = await axios(options);
  return data;
};

// Search for movies by their original, translated and alternative titles.

export const searchMovies = async query => {
  const options = {
    method: 'GET',
    url: `${url}/search/movie`,
    params: { language: 'en-US', api_key: KEY, page: '1', query: query },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`,
    },
  };
  const data = await axios(options);
  return data;
};

// Get the top level details of a movie by ID.
export const getMovieId = async id => {
  const options = {
    method: 'GET',
    url: `${url}/movie/${id}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`,
    },
  };
  const data = await axios(options);
  return data;
};

// запит інформації про акторський склад для сторінки кінофільму.
export const getCreditsId = async id => {
  const options = {
    method: 'GET',
    url: `${url}/movie/${id}/credits`,
    params: { language: 'en-US', аpi_key: KEY },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`,
    },
  };
  const data = await axios(options);
  return data;
};

//Get the user reviews for a movie.
export const getReviewsForMovie = async id => {
  const options = {
    method: 'GET',
    url: `${url}/movie/${id}/reviews`,
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`,
    },
  };
  const data = await axios(options);
  return data;
};
