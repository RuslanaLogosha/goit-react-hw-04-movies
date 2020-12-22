import { useState, useEffect } from 'react';
import moviesApi from '../../services/moviesApi';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const srcBaseUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const renderTrendingMovies = () => {
      moviesApi
        .fetchTrendingMovies()
        .then(response => setTrendingMovies(response));
      // .catch(error=> console.log(error));
    };
    renderTrendingMovies();
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      <ul>
        {trendingMovies.map(({ poster_path, title, id }) => (
          <li key={id}>
            <img src={`${srcBaseUrl}${poster_path}`} alt="" />
            <title>{title}</title>
          </li>
        ))}
      </ul>
    </>
  );
}
