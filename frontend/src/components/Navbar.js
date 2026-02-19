import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import SearchBar from './SearchBar';
import { FiLogOut, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-b from-black to-transparent z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/dashboard" className="text-3xl font-bold text-red-600">
            NETFLIX
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <SearchBar />
            <div className="flex items-center gap-4">
              <span className="text-gray-300">{user?.firstName}</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition"
              >
                <FiLogOut size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white text-2xl"
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="py-4">
              <SearchBar />
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-700">
              <span className="text-gray-300">{user?.firstName}</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition"
              >
                <FiLogOut size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
