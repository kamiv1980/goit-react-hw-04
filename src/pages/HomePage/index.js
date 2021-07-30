/** @format */

import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { ListMovies, Loader } from '../../components';
import * as Api from '../../services/api';

export const HomePage = ({ list = [] }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getMovies = () => {
    handleLoading();
    Api.apiTrending
      .getTrending()
      .then(({ data: { results } }) => {
        setMovies(results);
      })
      .catch((r) => console.log('err', r))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleLoading = () => setLoading((prev) => !prev);
  return (
    <div className={styles.wrapper}>
      <h1>Trending movies</h1>
      {isLoading && <Loader />}
      <ListMovies list={movies} />
    </div>
  );
};
