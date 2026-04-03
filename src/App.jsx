import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SurahPage from './pages/SurahPage';
import JuzPage from './pages/JuzPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/surah/:surahNumber" element={<SurahPage />} />
            <Route path="/juz" element={<JuzPage />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center text-gray-600">
              <p className="mb-2">Al Quran - Read & Reflect</p>
              <p className="text-sm">
                Built with ❤️ using React & Tailwind CSS
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Data provided by alquran.cloud API
              </p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
