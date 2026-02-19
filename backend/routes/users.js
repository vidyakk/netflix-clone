const express = require('express');
const {
  getProfile,
  updateProfile,
  addToWatchlist,
  removeFromWatchlist,
  getWatchlist
} = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.use(authMiddleware);

router.get('/profile', getProfile);
router.put('/profile', updateProfile);
router.post('/watchlist/add', addToWatchlist);
router.post('/watchlist/remove', removeFromWatchlist);
router.get('/watchlist', getWatchlist);

module.exports = router;
