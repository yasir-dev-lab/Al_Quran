import { useState, useRef, useEffect } from 'react';
import { useSearch } from '../hooks/useQuran';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { results, loading } = useSearch(query);
  const [showResults, setShowResults] = useState(false);
  const blurTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (blurTimeoutRef.current) {
        clearTimeout(blurTimeoutRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowResults(true);
  };

  const handleBlur = () => {
    blurTimeoutRef.current = setTimeout(() => setShowResults(false), 200);
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onBlur={handleBlur}
          onFocus={() => setShowResults(true)}
          placeholder="Search in the Quran..."
          className="w-full px-6 py-4 pl-14 rounded-full border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-all duration-300 text-lg shadow-md hover:shadow-lg focus:shadow-xl bg-white/90 backdrop-blur-sm"
        />
        <svg
          className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {showResults && query.trim().length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-white rounded-2xl shadow-2xl border border-teal-100 max-h-96 overflow-y-auto z-50">
          {loading ? (
            <div className="p-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
              <p className="mt-3 text-gray-600 font-medium">Searching...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {results.slice(0, 10).map((result, index) => (
                <Link
                  key={`${result.surah?.number || index}:${result.numberInSurah}`}
                  to={`/surah/${result.surah?.number || 1}`}
                  className="block p-5 hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 transition-all duration-300"
                  onClick={() => setShowResults(false)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-teal-700 bg-teal-100 px-3 py-1 rounded-full">
                          {result.surah?.englishName || 'Unknown'}
                        </span>
                        <span className="text-xs text-gray-500 font-medium">
                          Ayah {result.numberInSurah}
                        </span>
                      </div>
                      <p className="text-gray-700 line-clamp-2 leading-relaxed">{result.text}</p>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap font-medium">
                      {result.surah?.englishNameTranslation || ''}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-500 font-medium">No results found for "{query}"</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
