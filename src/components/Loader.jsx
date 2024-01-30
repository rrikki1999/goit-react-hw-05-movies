// Loader.jsx
import React, { useState, useEffect } from 'react';
import styles from '../css/Loader.module.css';

export const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    setIsLoading(false);
  }, []);

  return (
    <div className={styles.loaderContainer}>
      {isLoading ? (
        <div className={styles.loader}>
          <div className={styles.loaderBefore}></div>
          <div className={styles.loaderAfter}></div>
        </div>
      ) : null}
    </div>
  );
};
