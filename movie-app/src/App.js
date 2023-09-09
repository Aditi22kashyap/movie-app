// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Favorites from './components/Favorites';
import Watchlist from './components/Watchlist';

function App() {
  return (
    <Router>
      
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/watchlist" element={<Watchlist />} />
    </Routes>
    
  </Router>
  );
}

export default App;
