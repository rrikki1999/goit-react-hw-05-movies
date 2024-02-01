import React, { useState } from 'react';
import styles from '../css/Movies.module.css';

const FormMovies = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      return;
    }
    handleSubmit(query);
    setQuery('');
  };
  return (
    <form onClick={onHandleSubmit}>
      <div className={styles.searchContainer}>
        <input
          name="query"
          placeholder="Enter movie title"
          value={query}
          type="text"
          onChange={handleChange}
          className={styles.searchInput}
          autoComplete='true'
        />
        <button className={styles.searchButton}>Search</button>
      </div>
    </form>
  );
};

export default FormMovies;
