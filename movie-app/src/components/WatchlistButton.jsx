// WatchlistButton.js
import React from 'react';

function WatchlistButton({ movieId, addToWatchlist }) {
  const handleAddToWatchlist = () => {
    // Call the addToWatchlist function with the movie ID
    addToWatchlist(movieId);
  };

  return (
    <button onClick={handleAddToWatchlist}>Add to Watchlist</button>
  );
}

export default WatchlistButton;
