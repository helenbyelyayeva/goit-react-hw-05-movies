// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
import axios from 'axios';

const BASE_URL ='https://api.themoviedb.org/3/';
const API_KEY = 'e07de169e37f03be6b5aa0a3464541c3';

export const fetchTrendingMovies = async (search, page) => {
  const { data } = await axios.get(
    `${BASE_URL}?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};

export const fetchTrending = async () => {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  };
  
// export async function fetchTrendMoves(page = 1) {
//     const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`;
//     return await axios
//       .get(url)
//       .then(response => {
//         return response.data;
//       })
//       .catch(error => console.log(error));
//   }

// export async function getByKeyword(query, page) {
//     const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
//     return await axios
//       .get(url)
//       .then(response => {
//         return response.data;
//       })
//       .catch(error => console.log(error));
//   }

// export async function fetchDataById(id) {
//     const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return await response.json();
//   }

// export const getMovieCast = async (movieId) => {
//     const query = `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
//     const { data } = await axios.get(query);
//     return data;
// };

// export const searchMovies = async (stringToSearch) => {
//   const query = `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${stringToSearch}`;
//   const { data: movies } = await axios.get(query);
//   return movies;
// };

// export const getMovieDetails = async (movieId) => {
//   const query = `movie/${movieId}$?api_key=${API_KEY}&language=en-US`;
//   const { data: movie } = await axios.get(query);
//   return movie;
// };

// export const getTrendingMovies = async () => {
//   const query = `trending/movie/day?api_key=${API_KEY}`;
//   const { data: movies } = await axios.get(query);
//   return movies;
// };

// export const getMovieCast = async (movieId) => {
//   const query = `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
//   const { data } = await axios.get(query);
//   return data;
// };

// export const getReviews = async (movieId) => {
//   const query = `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`;
//   const { data } = await axios.get(query);
//   return data;
// };