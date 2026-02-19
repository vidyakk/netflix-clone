import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlay, FiInfo } from 'react-icons/fi';

const HeroBanner = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="relative h-96 md:h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src={movie.backdrop || movie.poster}
        alt={movie.title}
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-start">
        <div className="max-w-2xl px-4 md:px-8 pt-20 md:pt-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            {movie.title}
          </h1>

          <p className="text-gray-300 text-sm md:text-lg mb-8 line-clamp-3">
            {movie.description}
          </p>

          {/* Info */}
          <div className="flex gap-6 mb-8 text-sm md:text-base">
            <div>
              <p className="text-gray-400">Rating</p>
              <p className="text-xl font-semibold text-yellow-500">
                ⭐ {movie.rating?.toFixed(1) || 'N/A'}
              </p>
            </div>
            <div>
              <p className="text-gray-400">Release Date</p>
              <p className="text-xl font-semibold">{movie.releaseDate || 'N/A'}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 md:px-8 py-3 rounded-lg font-semibold text-white transition">
              <FiPlay size={20} />
              Play Now
            </button>
            <Link
              to={`/movie/${movie.id}`}
              className="flex items-center gap-2 border-2 border-white hover:bg-white/20 px-6 md:px-8 py-3 rounded-lg font-semibold text-white transition"
            >
              <FiInfo size={20} />
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
