import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Watchlist() {
  // Define a state to manage the watchlist
  const [watchlist, setWatchlist] = useState([]);

  // Function to remove a movie from the watchlist
  const removeFromWatchlist = (movieId) => {
    // Filter out the movie with the specified ID from the watchlist
    const updatedWatchlist = watchlist.filter((movie) => movie.id !== movieId);
    setWatchlist(updatedWatchlist);
  };

  // Function to fetch movie details from TMDB
  const fetchMovieDetails = async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=9fa68fb20c393a79c5f19ae1e6a3f081`
      );

      // Extract relevant movie details from the response
      const movieDetails = {
        id: response.data.id,
        title: response.data.title,
        poster_path: response.data.poster_path,
        // Add more movie details here as needed
      };

      return movieDetails;
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <h1>Watchlist</h1>
      <ul>
        {watchlist.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <button onClick={() => removeFromWatchlist(movie.id)}>Remove from Watchlist</button>
            {/* Add more movie details here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Watchlist;
