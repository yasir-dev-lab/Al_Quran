import { useParams, Link } from 'react-router-dom';
import { useSurah } from '../hooks/useQuran';

const SurahPage = () => {
  const { surahNumber } = useParams();
  const { ayahs, loading, error } = useSurah(surahNumber);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
          <p className="text-gray-600">Loading Surah...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error: {error}</p>
          <Link to="/" className="text-primary hover:underline">
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  if (!ayahs || !ayahs.ayahs) {
    return null;
  }

  const surahInfo = ayahs;
  const ayahList = ayahs.ayahs;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Surah Header */}
      <div className="bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 rounded-3xl p-10 text-white mb-10 shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-5xl font-bold mb-3">{surahInfo.englishName}</h1>
            <p className="text-xl opacity-95 font-medium">{surahInfo.englishNameTranslation}</p>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-80 uppercase tracking-wider">Surah</p>
            <p className="text-5xl font-bold">{surahInfo.number}</p>
          </div>
        </div>
        <div className="flex items-center gap-8 text-sm opacity-95 bg-white/10 backdrop-blur-sm rounded-xl p-4 inline-flex">
          <span className="font-semibold">{surahInfo.revelationType}</span>
          <span>•</span>
          <span className="font-semibold">{ayahList.length} Ayahs</span>
        </div>
      </div>

      {/* Bismillah (except for Surah At-Tawbah) */}
      {surahInfo.number !== 9 && (
        <div className="text-center mb-10">
          <p className="font-arabic text-5xl text-teal-800 leading-loose bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-teal-100">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
        </div>
      )}

      {/* Ayahs */}
      <div className="space-y-6">
        {ayahList.map((ayah, index) => (
          <div
            key={ayah.number}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200"
          >
            <div className="flex items-start gap-6">
              {/* Ayah Number */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center text-teal-700 font-bold text-sm shadow-md">
                  {index + 1}
                </div>
              </div>

              {/* Arabic Text */}
              <div className="flex-1">
                <p className="font-arabic text-4xl text-right text-gray-800 leading-loose mb-6" dir="rtl">
                  {ayah.text}
                </p>

                {/* English Translation */}
                {ayah.editions && ayah.editions[0] && (
                  <p className="text-gray-700 leading-relaxed text-lg border-t border-gray-100 pt-4">
                    {ayah.editions[0].text}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-10 flex justify-between">
        {surahInfo.number > 1 ? (
          <Link
            to={`/surah/${surahInfo.number - 1}`}
            className="px-8 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-700 font-semibold hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            ← Previous Surah
          </Link>
        ) : (
          <div />
        )}

        {surahInfo.number < 114 ? (
          <Link
            to={`/surah/${surahInfo.number + 1}`}
            className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-2xl font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Next Surah →
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default SurahPage;
