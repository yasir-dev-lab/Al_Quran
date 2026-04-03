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
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Read the Holy Quran
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore the divine words of Allah with Arabic text and English translation. 
          Reflect upon the verses and find peace in your heart.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 text-white text-center shadow-lg">
          <p className="text-4xl font-bold mb-2">114</p>
          <p className="opacity-90">Surahs</p>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
          <p className="text-4xl font-bold text-primary mb-2">30</p>
          <p className="text-gray-600">Juz</p>
        </div>
        <div className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-100">
          <p className="text-4xl font-bold text-primary mb-2">6,236</p>
          <p className="text-gray-600">Ayahs</p>
        </div>
      </div>

      {/* Surah Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">All Surahs</h2>
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
