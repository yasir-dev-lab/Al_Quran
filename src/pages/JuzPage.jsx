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
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-700 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6">
          Juz
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          The Quran is divided into 30 equal parts (Juz) to facilitate reading and memorization.
        </p>
      </div>

      {/* Juz Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {Array.from({ length: 30 }, (_, i) => i + 1).map((juzNumber) => (
          <button
            key={juzNumber}
            onClick={() => handleJuzSelect(juzNumber)}
            className={`p-6 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 ${
              selectedJuz === juzNumber
                ? 'bg-gradient-to-br from-teal-600 to-cyan-600 text-white shadow-xl scale-105'
                : 'bg-white text-gray-700 hover:bg-gradient-to-br hover:from-teal-50 hover:to-cyan-50 border-2 border-gray-200 hover:border-teal-300 shadow-md'
            }`}
          >
            <p className="text-3xl mb-1">{juzNumber}</p>
            <p className="text-sm opacity-80 font-medium">Juz</p>
          </button>
        ))}
      </div>

      {/* Juz Content */}
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mb-4"></div>
          <p className="text-gray-600 font-medium">Loading Juz...</p>
        </div>
      )}

      {juzData && !loading && (
        <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-teal-100">
          <div className="mb-10 pb-8 border-b-2 border-gray-100">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent mb-3">
              Juz {juzData.number}
            </h2>
            <p className="text-gray-600 text-lg font-medium">
              Starting from Surah {juzData.ayahs[0]?.surah?.englishName}
            </p>
          </div>

          <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
            {juzData.ayahs.map((ayah, index) => (
              <div
                key={ayah.number}
                className="border-b-2 border-gray-50 pb-6 last:border-0 hover:bg-gradient-to-r hover:from-teal-50/50 hover:to-cyan-50/50 rounded-xl p-4 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 text-teal-700 text-sm font-bold shadow-md">
                      {ayah.numberInSurah}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-arabic text-3xl text-right text-gray-800 leading-loose mb-4" dir="rtl">
                      {ayah.text}
                    </p>
                    {ayah.editions && ayah.editions[0] && (
                      <p className="text-gray-700 leading-relaxed text-lg border-t border-gray-100 pt-3">
                        {ayah.editions[0].text}
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-xs text-gray-500 font-medium bg-gray-50 inline-block px-3 py-1 rounded-full">
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
