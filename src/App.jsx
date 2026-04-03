import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SurahPage from './pages/SurahPage';
import JuzPage from './pages/JuzPage';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      <Navbar />
      <main className="py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surah/:surahNumber" element={<SurahPage />} />
          <Route path="/juz" element={<JuzPage />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-teal-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-gray-700">
            <p className="mb-2 font-semibold text-lg text-teal-800">Al Quran - Read & Reflect</p>
            <p className="text-sm text-gray-600">
              Built with ❤️ using React & Tailwind CSS
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Data provided by alquran.cloud API
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
