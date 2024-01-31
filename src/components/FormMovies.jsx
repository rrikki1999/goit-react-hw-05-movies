import React from 'react';
import styles from '../css/Movies.module.css';

const FormMovies = ({ onClick, searchQuery, setSearchQuery, handleKeyPress }) => {
  return (
    <form onClick={e => onClick(e)}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Enter movie title"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>Search</button>
      </div>
    </form>
  );
};

export default FormMovies; 
