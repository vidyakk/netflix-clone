import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlay, FiInfo } from 'react-icons/fi';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="relative h-56 rounded-lg overflow-hidden card-hover group cursor-pointer">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
          <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">
            {movie.title}
          </h3>

          <div className="flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 px-3 py-2 rounded text-sm font-semibold transition">
              <FiPlay size={16} />
              Play
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 px-3 py-2 rounded text-sm font-semibold transition">
              <FiInfo size={16} />
              Info
            </button>
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-red-600 px-2 py-1 rounded text-xs font-semibold">
          ⭐ {movie.rating?.toFixed(1) || 'N/A'}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
