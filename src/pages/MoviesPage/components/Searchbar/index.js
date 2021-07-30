/** @format */

import React, { useState } from 'react';
import styles from './styles.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSearch = ({ currentTarget: { value } }) => setSearch(value);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({ search });
    setSearch('');
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          className={styles.input}
          type="text"
          value={search}
          onChange={handleSearch}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />

        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
};
