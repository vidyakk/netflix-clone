import React, { useRef, useState } from 'react';
import MovieCard from './MovieCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const MovieRow = ({ title, movies }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current.scrollLeft <
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      );
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>

      <div className="relative group">
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full z-10 transition"
          >
            <FiChevronLeft size={24} />
          </button>
        )}

        {/* Movies Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-scroll hide-scrollbar scroll-smooth"
        >
          {movies.map(movie => (
            <div key={movie.id} className="flex-shrink-0 w-44">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full z-10 transition"
          >
            <FiChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieRow;
