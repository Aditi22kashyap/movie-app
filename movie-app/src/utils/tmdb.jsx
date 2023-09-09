import axios from 'axios';

const apiKey = '9fa68fb20c393a79c5f19ae1e6a3f081';
const apiUrl = 'https://api.themoviedb.org/3';

const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${apiUrl}/movie/popular?api_key=${apiKey}`
    );
    const popularMovies = response.data.results;
    console.log(popularMovies);
    return popularMovies;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

export default fetchPopularMovies;
