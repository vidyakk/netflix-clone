const express = require('express');
const { 
  getTrending, 
  getPopular, 
  getTopRated, 
  search, 
  getMovieDetails 
} = require('../controllers/movieController');

const router = express.Router();

router.get('/trending', getTrending);
router.get('/popular', getPopular);
router.get('/top-rated', getTopRated);
router.get('/search', search);
router.get('/:movieId', getMovieDetails);

module.exports = router;
