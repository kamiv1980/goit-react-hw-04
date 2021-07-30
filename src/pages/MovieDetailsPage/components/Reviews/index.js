/** @format */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
import * as Api from '../../../../services/api';
import { Loader } from '../../../../components';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const { movieId } = useParams();

  const handleLoading = () => setLoading((prev) => !prev);

  const getMovieReviews = () => {
    handleLoading();
    Api.apiReviews
      .getReviews({ id: movieId })
      .then(({ data }) => {
        setReviews(data.results);
      })
      .catch((r) => console.log('err', r))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {isLoading && <Loader />}
      <ul>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li className={styles.listItem} key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>No reviews</p>
        )}
      </ul>
    </div>
  );
};
