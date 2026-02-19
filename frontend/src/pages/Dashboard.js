import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { movieAPI } from '../services/api';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [trending, popular, topRated] = await Promise.all([
          movieAPI.getTrending(),
          movieAPI.getPopular(),
          movieAPI.getTopRated()
        ]);

        setTrendingMovies(trending.data);
        setPopularMovies(popular.data);
        setTopRatedMovies(topRated.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-2xl">Loading...</div>
        </div>
      ) : (
        <>
          {trendingMovies.length > 0 && (
            <HeroBanner movie={trendingMovies[0]} />
          )}

          <div className="space-y-8 px-4 md:px-8 py-8">
            {trendingMovies.length > 0 && (
              <MovieRow title="Trending Now" movies={trendingMovies} />
            )}

            {popularMovies.length > 0 && (
              <MovieRow title="Popular" movies={popularMovies} />
            )}

            {topRatedMovies.length > 0 && (
              <MovieRow title="Top Rated" movies={topRatedMovies} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
