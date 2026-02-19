const User = require('../models/User');

// Get User Profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update User Profile
exports.updateProfile = async (req, res) => {
  try {
    const { firstName, lastName, profileImage } = req.body;

    const user = await User.findByIdAndUpdate(
      req.userId,
      { firstName, lastName, profileImage },
      { new: true, runValidators: true }
    );

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add to Watchlist
exports.addToWatchlist = async (req, res) => {
  try {
    const { movieId, title, poster } = req.body;

    const user = await User.findById(req.userId);
    const movieExists = user.watchlist.some(item => item.movieId === movieId);

    if (!movieExists) {
      user.watchlist.push({
        movieId,
        title,
        poster,
        addedAt: new Date()
      });
      await user.save();
    }

    res.status(200).json({ message: 'Added to watchlist', watchlist: user.watchlist });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove from Watchlist
exports.removeFromWatchlist = async (req, res) => {
  try {
    const { movieId } = req.body;

    const user = await User.findByIdAndUpdate(
      req.userId,
      { $pull: { watchlist: { movieId } } },
      { new: true }
    );

    res.status(200).json({ message: 'Removed from watchlist', watchlist: user.watchlist });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Watchlist
exports.getWatchlist = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    res.status(200).json(user.watchlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
