import styles from './RouterLoader.module.scss';

/**
 * Component used to mitigate a wait time between component assembly
 * when using the Lazy Loading concept, in the React router
 */
const RouterLoader = () => {
  return (
    <div className={styles['loader']}></div>
  );
};

export default RouterLoader;