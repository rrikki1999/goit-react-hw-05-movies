import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import NotFound from './NotFound';
import { Loader } from './Loader';
import { Suspense, lazy } from 'react';

// import Home from '../pages/Home';
// import Movies from '../pages/Movies';
// import MovieDetails from '../pages/MovieDetails';
// import Cast from '../pages/Cast';
// import Reviews from '../pages/Reviews';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));


export const App = () => {
  return (
    <div>
      <SharedLayout />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:movieId/*" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      
    </div>
  );
};
