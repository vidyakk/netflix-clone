import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { movieAPI } from '../services/api';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.trim()) {
      setLoading(true);
      movieAPI.search(query)
        .then(response => setMovies(response.data))
        .catch(error => console.error('Search error:', error))
        .finally(() => setLoading(false));
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SearchBar />

        {query && (
          <h1 className="text-3xl font-bold mt-8 mb-8">
            Search Results for "{query}"
          </h1>
        )}

        {loading && (
          <div className="text-center py-12">
            <div className="text-gray-400">Searching...</div>
          </div>
        )}

        {!loading && movies.length === 0 && query && (
          <div className="text-center py-12">
            <div className="text-gray-400">No movies found matching your search.</div>
          </div>
        )}

        {movies.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
