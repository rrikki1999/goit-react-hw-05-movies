import styles from '../css/Loader.module.css';

export const Loader = () => {
  
  return (
    <div className={styles.loaderContainer}>
      
        <div className={styles.loader}>
          <div className={styles.loaderBefore}></div>
          <div className={styles.loaderAfter}></div>
        </div>
      
    </div>
  );
};
