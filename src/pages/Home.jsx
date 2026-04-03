import { useSurahs } from '../hooks/useQuran';
import SurahCard from '../components/SurahCard';

const Home = () => {
  const { surahs, loading, error } = useSurahs();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
          <p className="text-gray-600">Loading Surahs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-500">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-700 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6 animate-pulse">
          Read the Holy Quran
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Explore the divine words of Allah with Arabic text and English translation. 
          Reflect upon the verses and find peace in your heart.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-8 text-white text-center shadow-xl transform hover:scale-105 transition-transform duration-300">
          <p className="text-5xl font-bold mb-2">114</p>
          <p className="opacity-90 text-lg font-medium">Surahs</p>
        </div>
        <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-teal-100 transform hover:scale-105 transition-transform duration-300">
          <p className="text-5xl font-bold text-teal-600 mb-2">30</p>
          <p className="text-gray-600 text-lg font-medium">Juz</p>
        </div>
        <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-teal-100 transform hover:scale-105 transition-transform duration-300">
          <p className="text-5xl font-bold text-teal-600 mb-2">6,236</p>
          <p className="text-gray-600 text-lg font-medium">Ayahs</p>
        </div>
      </div>

      {/* Surah Grid */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <span className="w-2 h-8 bg-gradient-to-b from-teal-600 to-cyan-600 rounded-full"></span>
          All Surahs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {surahs.map((surah) => (
            <SurahCard key={surah.number} {...surah} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
