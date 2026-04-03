import { useState } from 'react';
import { useSearch } from '../hooks/useQuran';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { results, loading } = useSearch(query);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowResults(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowResults(false), 200);
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
          className="w-full px-6 py-4 pl-14 rounded-full border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-lg"
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
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 max-h-96 overflow-y-auto z-50">
          {loading ? (
            <div className="p-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="mt-2 text-gray-500">Searching...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {results.slice(0, 10).map((result, index) => (
                <Link
                  key={`${result.surah.number}:${result.numberInSurah}`}
                  to={`/surah/${result.surah.number}`}
                  className="block p-4 hover:bg-gray-50 transition-colors"
                  onClick={() => setShowResults(false)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                          {result.surah.englishName}
                        </span>
                        <span className="text-xs text-gray-400">
                          Ayah {result.numberInSurah}
                        </span>
                      </div>
                      <p className="text-gray-700 line-clamp-2">{result.text}</p>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      {result.surah.englishNameTranslation}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              No results found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
