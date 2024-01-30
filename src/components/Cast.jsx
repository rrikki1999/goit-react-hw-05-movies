import React, { useEffect, useState } from 'react';
import { getCreditsId } from '../services/api';
import { useParams } from 'react-router-dom';
import styles from '../css/Cast.module.css'

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const defaultImg = 'https://via.placeholder.com/200x300?text=No+Image+Available';

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await getCreditsId(movieId);
        setCast(response.data.cast);
      } catch (error) {
        console.error('Error fetching movie cast:', error);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div className={styles.castContainer}>
      <h1>Movie Cast</h1>
      <ul className={styles.castList}>
        {cast.map(({ id, name, profile_path, character }) => (
          <li key={id} className={styles.castItem}>
            <img
              className={styles.castImg}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : defaultImg
              }
              alt={name}
              width={208}
              height={300}
            />
            <h3 className={styles.castName}>{name}</h3>
            <p className={styles.castCharacter}>Role: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Cast;
