import axios from 'axios';

const key = '3b0a0f3678b03bfe7113d836939cb420';

const fetchTrendingMovies = async () => {
  try {
    const config = {
      url: 'https://api.themoviedb.org/3/trending/movie/week',
      params: {
        api_key: key,
      },
    };

    const { data } = await axios(config);
    return data.results;
  } catch (error) {
    new Error('No response from server');
  }
};

async function fetchMovieDetails(movie_id) {
  try {
    const config = {
      url: `https://api.themoviedb.org/3/movie/${movie_id}`,
      params: {
        api_key: key,
        language: 'en-US',
      },
    };

    const { data } = await axios(config, movie_id);
    return data;
  } catch (error) {
    new Error('No response from server');
  }
}

async function fetchMovieCast(movie_id) {
  try {
    const config = {
      url: `https://api.themoviedb.org/3/movie/${movie_id}/credits`,
      params: {
        api_key: key,
        language: 'en-US',
      },
    };

    const { data } = await axios(config, movie_id);
    return data.cast;
  } catch (error) {
    new Error('No response from server');
  }
}

async function fetchMovieReviews(movie_id) {
  try {
    const config = {
      url: `https://api.themoviedb.org/3/movie/${movie_id}/reviews`,
      params: {
        api_key: key,
        language: 'en-US',
      },
    };

    const { data } = await axios(config, movie_id);
    return data.results;
  } catch (error) {
    new Error('No response from server');
  }
}

async function fetchMoviesByQuery(query) {
  try {
    const config = {
      url: `https://api.themoviedb.org/3/search/movie`,
      params: {
        api_key: key,
        language: 'en-US',
        query,
      },
    };

    const { data } = await axios(config);
    return data.results;
  } catch (error) {
    new Error('No response from server');
  }
}

const api = {
  fetchTrendingMovies,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
  fetchMoviesByQuery,
};

export default api;

//___________________________________________________________________________________
// Api using fetch()
// const baseURL = `https://api.themoviedb.org/3`;

// function fetchTrendingMovies() {
//   const url = `${baseURL}/trending/${media_type}/${time_window}?api_key=${key}`;
//   return fetch(url)
//     .then(response => response.json())
//     .then(({ results }) => {
//       return results;
//     });
// }
