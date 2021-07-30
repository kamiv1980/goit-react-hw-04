/** @format */

import React, { useEffect, useState } from 'react';
import { Route, Switch, useParams, useHistory, Link } from 'react-router-dom';
import styles from './styles.module.css';
import * as Api from '../../services/api';
import { Cast, Reviews } from './components';
import { Loader } from '../../components';

export const MoviesDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);

  const { movieId } = useParams();
  const history = useHistory();

  const handleLoading = () => setLoading((prev) => !prev);

  const getMovieDetails = () => {
    handleLoading();
    Api.apiDetails
      .getDetails({ id: movieId })
      .then(({ data }) => {
        setMovie(data);
        setGenres(movie.genres);
        console.log('genres', movie.genres);
      })
      .catch((r) => console.log('err', r))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getMovieDetails();
  }, [movieId]);

  return (
    <div className={styles.wrapper}>
      {isLoading && <Loader />}
      {!!movie.poster_path && (
        <img className={styles.img} src={`https://image.tmdb.org/t/p/w342/` + movie.poster_path} alt={movie.title} />
      )}
      <section className={styles.about}>
        <h1>
          {movie.title} ({movie.release_date})
        </h1>
        <p>User score: {movie.vote_average} </p>
        <p className={styles.bold}>Overwiew</p>
        <p>{movie.overview}</p>
        <p className={styles.bold}>Genres</p>
        {/*<ul>*/}
        {/*  {genres.map((genre) => (*/}
        {/*    <li key={genre.id}>{genre.name}</li>*/}
        {/*  ))}*/}
        {/*</ul>*/}
        <div className={styles.addInfoSection}>
          <p className={styles.bold}>Additional information</p>
          <Link className={styles.addInfo} to={{ pathname: `/movies/${movie.id}/cast` }}>
            Cast
          </Link>
          <Link className={styles.addInfo} to={{ pathname: `/movies/${movie.id}/reviews` }}>
            Reviews
          </Link>
        </div>
        <Switch>
          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
        </Switch>
        <button className={styles.backBtn} onClick={() => history.goBack()}>
          Go Back
        </button>
      </section>
    </div>
  );
};
