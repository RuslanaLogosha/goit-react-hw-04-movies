// import axios from 'axios';

const key = '3b0a0f3678b03bfe7113d836939cb420';
const media_type = 'movie';
const time_window = 'week';
const baseURL = `https://api.themoviedb.org/3`;

function fetchTrendingMovies() {
  const url = `${baseURL}/trending/${media_type}/${time_window}?api_key=${key}`;
  return fetch(url)
    .then(response => response.json())
    .then(({ results }) => {
      return results;
    });
}

// const typeOfSearch = 'trending';
// axios.defaults.baseURL = `https://api.themoviedb.org/3`;
// axios.defaults.params = {
//   key,
//   media_type,
//   time_window,
// };

// async function fetchTrendingMovies() {
//   try {
//     const { data } = await axios({
//       params: {
//         typeOfSearch,
//       },
//     });
//     return data.results;
//   } catch (error) {
//     new Error('No response from server');
//   }
// }
const api = { fetchTrendingMovies };
export default api;
