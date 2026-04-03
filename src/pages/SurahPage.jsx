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
      <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white mb-8 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{surahInfo.englishName}</h1>
            <p className="text-lg opacity-90">{surahInfo.englishNameTranslation}</p>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-75">Surah</p>
            <p className="text-3xl font-bold">{surahInfo.number}</p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm opacity-90">
          <span>{surahInfo.revelationType}</span>
          <span>•</span>
          <span>{ayahList.length} Ayahs</span>
        </div>
      </div>

      {/* Bismillah (except for Surah At-Tawbah) */}
      {surahInfo.number !== 9 && (
        <div className="text-center mb-8">
          <p className="font-arabic text-4xl text-gray-800 leading-loose">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
        </div>
      )}

      {/* Ayahs */}
      <div className="space-y-6">
        {ayahList.map((ayah, index) => (
          <div
            key={ayah.number}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
          >
            <div className="flex items-start gap-4">
              {/* Ayah Number */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-semibold text-sm">
                  {index + 1}
                </div>
              </div>

              {/* Arabic Text */}
              <div className="flex-1">
                <p className="font-arabic text-3xl text-right text-gray-800 leading-loose mb-4" dir="rtl">
                  {ayah.text}
                </p>

                {/* English Translation */}
                {ayah.editions && ayah.editions[0] && (
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {ayah.editions[0].text}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        {surahInfo.number > 1 ? (
          <Link
            to={`/surah/${surahInfo.number - 1}`}
            className="px-6 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-700 font-medium hover:border-primary hover:text-primary transition-colors"
          >
            ← Previous Surah
          </Link>
        ) : (
          <div />
        )}

        {surahInfo.number < 114 ? (
          <Link
            to={`/surah/${surahInfo.number + 1}`}
            className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-secondary transition-colors"
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
