import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import moviesApi from '../../services/moviesApi';
import s from './homePage.module.css';

export default function HomePage() {
  const { url } = useRouteMatch();
  const [trendingMovies, setTrendingMovies] = useState([]);
  const srcBaseUrl = 'https://image.tmdb.org/t/p/w500';
  console.log(url);
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
      <ul className={s.filmsList}>
        {trendingMovies.map(({ poster_path, title, id }) => (
          <li key={id} className={s.filmsListItem}>
            <Link to={`/movies/${id}`}>
              <img src={`${srcBaseUrl}${poster_path}`} alt="" />
              <h3 className={s.title}>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
