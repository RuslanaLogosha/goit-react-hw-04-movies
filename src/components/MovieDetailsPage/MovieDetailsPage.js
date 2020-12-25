import { useState, useEffect } from 'react';
import { useParams, Route, NavLink, useRouteMatch } from 'react-router-dom';
import Cast from '../Cast';
import Reviews from '../Reviews';

import moviesApi from '../../services/moviesApi';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  const srcBaseUrl = 'https://image.tmdb.org/t/p/w500';
  const [isVisibleCast, setIsVisibleCast] = useState(false);
  const [isVisibleReviews, setIsVisibleReviews] = useState(false);

  useEffect(() => {
    const renderMovieDetails = () => {
      moviesApi.fetchMovieDetails(movieId).then(setMovie);
    };
    renderMovieDetails();
  }, [movieId]);

  const makeVisibleCast = () => {
    if (isVisibleReviews === true) {
      setIsVisibleReviews(false);
    }
    setIsVisibleCast(true);
  };

  const makeVisibleReviews = () => {
    if (isVisibleCast === true) {
      setIsVisibleCast(false);
    }

    setIsVisibleReviews(true);
  };

  return (
    <>
      {movie && (
        <>
          <img src={`${srcBaseUrl}${movie.poster_path}`} alt={movie.title} />
          <h3>
            {movie.title}({movie.release_date.split('-')[0]})
          </h3>
          <span>User Score:</span>
          <h2>Overview</h2>
          <span>{movie.overview}</span>
          {<h3>Genres</h3>}
          {<span>{movie.genres.map(genre => genre.name).join(' ')}</span>}
          <hr />
          <span>Additional information</span>
          <ul>
            <li>
              <NavLink to={`${url}/cast`} onClick={makeVisibleCast}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`} onClick={makeVisibleReviews}>
                Reviews
              </NavLink>
            </li>
          </ul>
          <hr />

          <Route path={`${path}/:cast`}>
            {movie && isVisibleCast && <Cast />}
          </Route>

          <Route path={`${path}/:reviews`}>
            {movie && isVisibleReviews && <Reviews />}
          </Route>
        </>
      )}
    </>
  );
}
