const axios = require('axios');

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = process.env.TMDB_API_KEY;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Get Trending Movies
exports.getTrending = async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/trending/movie/day`, {
      params: {
        api_key: TMDB_API_KEY
      }
    });

    const movies = response.data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      poster: `${IMAGE_BASE_URL}${movie.poster_path}`,
      backdrop: `${IMAGE_BASE_URL}${movie.backdrop_path}`,
      description: movie.overview,
      rating: movie.vote_average,
      releaseDate: movie.release_date
    }));

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Popular Movies
exports.getPopular = async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      params: {
        api_key: TMDB_API_KEY,
        page: req.query.page || 1
      }
    });

    const movies = response.data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      poster: `${IMAGE_BASE_URL}${movie.poster_path}`,
      backdrop: `${IMAGE_BASE_URL}${movie.backdrop_path}`,
      description: movie.overview,
      rating: movie.vote_average,
      releaseDate: movie.release_date
    }));

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Top Rated Movies
exports.getTopRated = async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/top_rated`, {
      params: {
        api_key: TMDB_API_KEY
      }
    });

    const movies = response.data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      poster: `${IMAGE_BASE_URL}${movie.poster_path}`,
      backdrop: `${IMAGE_BASE_URL}${movie.backdrop_path}`,
      description: movie.overview,
      rating: movie.vote_average,
      releaseDate: movie.release_date
    }));

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search Movies
exports.search = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        query: query
      }
    });

    const movies = response.data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      poster: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : null,
      backdrop: movie.backdrop_path ? `${IMAGE_BASE_URL}${movie.backdrop_path}` : null,
      description: movie.overview,
      rating: movie.vote_average,
      releaseDate: movie.release_date
    }));

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Movie Details
exports.getMovieDetails = async (req, res) => {
  try {
    const { movieId } = req.params;

    const response = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: TMDB_API_KEY,
        append_to_response: 'credits'
      }
    });

    const movie = response.data;
    const details = {
      id: movie.id,
      title: movie.title,
      poster: `${IMAGE_BASE_URL}${movie.poster_path}`,
      backdrop: `${IMAGE_BASE_URL}${movie.backdrop_path}`,
      description: movie.overview,
      rating: movie.vote_average,
      releaseDate: movie.release_date,
      runtime: movie.runtime,
      genres: movie.genres.map(g => g.name),
      budget: movie.budget,
      revenue: movie.revenue,
      cast: movie.credits.cast.slice(0, 10).map(actor => ({
        id: actor.id,
        name: actor.name,
        character: actor.character,
        image: actor.profile_path ? `${IMAGE_BASE_URL}${actor.profile_path}` : null
      }))
    };

    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
