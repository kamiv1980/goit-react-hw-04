/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const ListMovies = ({ list = [] }) => {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <li key={item.id}>
          <Link to={{ pathname: `/movies/${item.id}` }}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};
