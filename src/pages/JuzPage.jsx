import { useState } from 'react';
import { fetchJuz } from '../services/quranApi';

const JuzPage = () => {
  const [selectedJuz, setSelectedJuz] = useState(null);
  const [juzData, setJuzData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleJuzSelect = async (juzNumber) => {
    setSelectedJuz(juzNumber);
    setLoading(true);
    try {
      const data = await fetchJuz(juzNumber);
      setJuzData(data);
    } catch (error) {
      console.error('Error fetching juz:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Juz</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The Quran is divided into 30 equal parts (Juz) to facilitate reading and memorization.
        </p>
      </div>

      {/* Juz Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {Array.from({ length: 30 }, (_, i) => i + 1).map((juzNumber) => (
          <button
            key={juzNumber}
            onClick={() => handleJuzSelect(juzNumber)}
            className={`p-6 rounded-xl font-semibold transition-all duration-300 ${
              selectedJuz === juzNumber
                ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-primary/30 shadow-md'
            }`}
          >
            <p className="text-2xl mb-1">{juzNumber}</p>
            <p className="text-sm opacity-75">Juz</p>
          </button>
        ))}
      </div>

      {/* Juz Content */}
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
          <p className="text-gray-600">Loading Juz...</p>
        </div>
      )}

      {juzData && !loading && (
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Juz {juzData.number}
            </h2>
            <p className="text-gray-600">
              Starting from Surah {juzData.ayahs[0]?.surah?.englishName}
            </p>
          </div>

          <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4">
            {juzData.ayahs.map((ayah, index) => (
              <div
                key={ayah.number}
                className="border-b border-gray-100 pb-6 last:border-0"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {ayah.numberInSurah}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-arabic text-2xl text-right text-gray-800 leading-loose mb-3" dir="rtl">
                      {ayah.text}
                    </p>
                    {ayah.editions && ayah.editions[0] && (
                      <p className="text-gray-700 leading-relaxed">
                        {ayah.editions[0].text}
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-xs text-gray-400">
                  {ayah.surah.englishName} - Ayah {ayah.numberInSurah}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default JuzPage;
