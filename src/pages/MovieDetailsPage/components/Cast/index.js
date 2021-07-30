/** @format */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
import * as Api from '../../../../services/api';
import { Loader } from '../../../../components';

export const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const { movieId } = useParams();

  const handleLoading = () => setLoading((prev) => !prev);

  const getMovieCredits = () => {
    handleLoading();
    Api.apiCredits
      .getCredits({ id: movieId })
      .then(({ data }) => {
        setCredits(data.cast);
        console.log(credits);
      })
      .catch((r) => console.log('err', r))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getMovieCredits();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      {isLoading && <Loader />}
      <ul className={styles.list}>
        {credits &&
          credits.map((item) => (
            <li className={styles.card} key={item.credit_id}>
              {item.profile_path && <img src={'https://image.tmdb.org/t/p/w185' + item.profile_path} alt={item.name} />}
              <p>{item.name}</p>
              <p>Character: {item.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
