import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import moviesApi from '../../services/moviesApi';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  console.log(movieId);
  // const params = useParams();
  // console.log(params);
  const [movie, setMovie] = useState(null);
  const srcBaseUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const renderMovieDetails = () => {
      moviesApi.fetchMovieDetails(movieId).then(setMovie);
    };
    renderMovieDetails();
  }, [movieId]);

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
          {<span>{movie.genres.map(res => res.name)}</span>}
        </>
      )}
    </>
  );
}
