import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { movieAPI, userAPI } from '../services/api';
import { FiArrowLeft, FiPlay, FiPlus, FiCheck } from 'react-icons/fi';

const MovieDetail = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [inWatchlist, setInWatchlist] = useState(false);
  const [addingToWatchlist, setAddingToWatchlist] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await movieAPI.getMovieDetails(movieId);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleAddToWatchlist = async () => {
    setAddingToWatchlist(true);
    try {
      await userAPI.addToWatchlist({
        movieId: movie.id,
        title: movie.title,
        poster: movie.poster
      });
      setInWatchlist(true);
    } catch (error) {
      console.error('Error adding to watchlist:', error);
    } finally {
      setAddingToWatchlist(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Movie not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Backdrop */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={movie.backdrop || movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 -mt-12 relative z-10"
        >
          <FiArrowLeft size={24} />
          <span>Go Back</span>
        </button>

        <div className="grid md:grid-cols-3 gap-8 -mt-20 relative z-10 mb-12">
          {/* Poster */}
          <div className="md:col-span-1">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full rounded-lg shadow-2xl"
            />
          </div>

          {/* Details */}
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>

            {/* Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div>
                <p className="text-gray-400 text-sm">Rating</p>
                <p className="text-xl font-semibold text-yellow-500">
                  ⭐ {movie.rating.toFixed(1)}/10
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Release Date</p>
                <p className="text-xl font-semibold">{movie.releaseDate}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Runtime</p>
                <p className="text-xl font-semibold">{movie.runtime} min</p>
              </div>
            </div>

            {/* Genres */}
            {movie.genres && (
              <div className="mb-8">
                <p className="text-gray-400 text-sm mb-2">Genres</p>
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {movie.description}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition">
                <FiPlay />
                Play Now
              </button>
              <button
                onClick={handleAddToWatchlist}
                disabled={addingToWatchlist || inWatchlist}
                className="flex items-center gap-2 border-2 border-gray-400 hover:border-white px-8 py-3 rounded-lg font-semibold transition disabled:opacity-50"
              >
                {inWatchlist ? (
                  <>
                    <FiCheck /> Added to Watchlist
                  </>
                ) : (
                  <>
                    <FiPlus /> Add to Watchlist
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Cast */}
        {movie.cast && movie.cast.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Cast</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {movie.cast.map((actor) => (
                <div key={actor.id} className="text-center">
                  {actor.image && (
                    <img
                      src={actor.image}
                      alt={actor.name}
                      className="w-full h-48 object-cover rounded-lg mb-3"
                    />
                  )}
                  <p className="font-semibold text-sm">{actor.name}</p>
                  <p className="text-gray-400 text-xs">{actor.character}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
