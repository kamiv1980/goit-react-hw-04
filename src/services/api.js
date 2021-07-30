/** @format */

import axios from 'axios';

const key = '87547ad0a5cfee0fba05460a073a9eb9';
const baseUrl = 'https://api.themoviedb.org/3/';

const movies = ({ value = '', page = 1 }) => baseUrl + 'search/movie?api_key=' + key + `&query=${value}&page=${page}`;
const details = ({ id = '' }) => baseUrl + `movie/${id}?api_key=` + key;
const credits = ({ id = '' }) => baseUrl + `movie/${id}/credits?api_key=` + key;
const reviews = ({ id = '' }) => baseUrl + `movie/${id}/reviews?api_key=` + key;

export const apiSearch = {
  getMovies: (props) => axios.get(movies(props)),
};
export const apiTrending = {
  getTrending: () => axios.get(baseUrl + 'trending/movie/day?api_key=' + key),
};
export const apiDetails = {
  getDetails: (id) => axios.get(details(id)),
};
export const apiCredits = {
  getCredits: (id) => axios.get(credits(id)),
};
export const apiReviews = {
  getReviews: (id) => axios.get(reviews(id)),
};
