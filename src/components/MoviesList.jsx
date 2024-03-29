import { Link, useLocation } from 'react-router-dom';
import css from '../css/MoviesList.module.css';

export const MoviesList = ({ movies }) => {
    const location = useLocation();
  
    return (
      <div>
        <ul className={css.moviesList}>
          {movies.map(({ id, original_title, poster_path, title }) => (
            <li key={id} className={css.moviesListItem}>
              <Link
                className={css.moviesListLink}
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                {poster_path ? (
                  <img
                    className={css.moviesListImg}
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                  />
                ) : (
                  <div>
                    <img
                      src="https://th.bing.com/th/id/OIP.7qni1YNN24OiR3n0YCp0QgHaEo?rs=1&pid=ImgDetMain"
                      alt="movie"
                      width={200}
                      height={300}
                    />
                  </div>
                )}
                <p className={css.moviesListTitle}>{original_title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };