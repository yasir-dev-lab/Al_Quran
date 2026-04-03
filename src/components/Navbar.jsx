import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg border-b border-teal-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L9.5 6.5L4 7.5L8 11.5L7 17L12 14.5L17 17L16 11.5L20 7.5L14.5 6.5L12 2Z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent group-hover:from-teal-600 group-hover:to-cyan-500 transition-all">
                Al Quran
              </h1>
              <p className="text-xs text-gray-500 font-medium">Read & Reflect</p>
            </div>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:block flex-1 max-w-2xl">
            <SearchBar />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-semibold transition-all duration-300 px-4 py-2 rounded-lg ${
                location.pathname === '/'
                  ? 'bg-teal-100 text-teal-700'
                  : 'text-gray-600 hover:bg-teal-50 hover:text-teal-700'
              }`}
            >
              Surahs
            </Link>
            <Link
              to="/juz"
              className={`text-sm font-semibold transition-all duration-300 px-4 py-2 rounded-lg ${
                location.pathname === '/juz'
                  ? 'bg-teal-100 text-teal-700'
                  : 'text-gray-600 hover:bg-teal-50 hover:text-teal-700'
              }`}
            >
              Juz
            </Link>
          </div>
        </div>

        {/* Mobile Search - Visible on mobile */}
        <div className="md:hidden pb-4">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
