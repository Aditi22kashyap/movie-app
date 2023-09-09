// WatchlistButtonHomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function WatchButton() {
  return (
    <Link to="/watchlist">
      <button>Watchlist</button>
    </Link>
  );
}

export default WatchButton;
