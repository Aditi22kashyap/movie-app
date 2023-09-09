import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import WatchlistButton from './WatchlistButton';

const MovieDetails = ({ match }) => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [watchlist, setWatchlist] = useState([]); // Step 1: Create a watchlist state

  useEffect(() => {
    // Fetch movie details using the movie ID from the URL
    async function fetchMovieDetails() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=9fa68fb20c393a79c5f19ae1e6a3f081`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }

    fetchMovieDetails();
  }, [id]);

  const addToWatchlist = (movieId) => {
    // Step 2: Implement addToWatchlist function to add movies to the watchlist state
    setWatchlist((prevWatchlist) => [...prevWatchlist, movieId]);
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='Details'>
      <h1 className='Details-h'>{movieDetails.title}</h1>
      <img
        className='Details-img'
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <p className='Details-p'>{movieDetails.overview}</p>
      <p className='Details-p'>Release Date: {movieDetails.release_date}</p>
      <p className='Details-p'>Popularity: {movieDetails.popularity}</p>
      <p className='Details-p'>Vote Average: {movieDetails.vote_average}</p>
      <p className='Details-p'>Original Language: {movieDetails.original_language}</p>
      <WatchlistButton movieId={id} addToWatchlist={addToWatchlist} /> {/* Step 3 */}
    </div>
  );
};

export default MovieDetails;


