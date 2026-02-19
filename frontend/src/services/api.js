import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  getMe: () => api.get('/auth/me')
};

export const movieAPI = {
  getTrending: () => api.get('/movies/trending'),
  getPopular: (page = 1) => api.get('/movies/popular', { params: { page } }),
  getTopRated: () => api.get('/movies/top-rated'),
  search: (query) => api.get('/movies/search', { params: { query } }),
  getMovieDetails: (movieId) => api.get(`/movies/${movieId}`)
};

export const userAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (data) => api.put('/users/profile', data),
  getWatchlist: () => api.get('/users/watchlist'),
  addToWatchlist: (data) => api.post('/users/watchlist/add', data),
  removeFromWatchlist: (data) => api.post('/users/watchlist/remove', data)
};

export default api;
