import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import { SharedLayout } from './SharedLayout';
import NotFound from './NotFound';

export const App = () => {
  return (
    <div>
      <SharedLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieId/*" element={<MovieDetails />} />
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
