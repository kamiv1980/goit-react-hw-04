/** @format */

import React, { useState } from 'react';
import { Searchbar } from './components/Searchbar';
import { apiSearch } from '../../services/api';
import { ListMovies, Loader } from '../../components';

export const MoviesPage = () => {
  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const handleLoading = () => setLoading((prev) => !prev);

  const handleSearch = (searchQuery) => {
    handleLoading();
    apiSearch
      .getMovies({ value: searchQuery.search, page: 1 })
      .then(({ data: { results } }) => {
        setResult(results);
      })
      .catch((r) => console.log('err', r))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Searchbar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      <ListMovies list={result} />
    </>
  );
};
