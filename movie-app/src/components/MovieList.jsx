import React, { useEffect, useState } from 'react'
import fetchPopularMovies from '../utils/tmdb'; 
import './MovieList.css';
import { Link } from 'react-router-dom';
import WatchButton from './WatchButton';
function MovieList() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    // Fetch popular movies when the component mounts
    async function fetchMovies() {
      try {
        const movies = await fetchPopularMovies();
        setPopularMovies(movies);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <WatchButton/>
      <ul className="movie-list-container">
        {popularMovies.map((movie) => (
          <li key={movie.id} className="movie-item">
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </Link>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList