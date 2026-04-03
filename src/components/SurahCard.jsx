import { Link } from 'react-router-dom';

const SurahCard = ({ number, englishName, englishNameTranslation, numberOfAyahs }) => {
  return (
    <Link
      to={`/surah/${number}`}
      className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-primary/30 group"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
            {number}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">
              {englishName}
            </h3>
            <p className="text-sm text-gray-500">{englishNameTranslation}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Verses</p>
          <p className="text-sm font-medium text-gray-700">{numberOfAyahs}</p>
        </div>
      </div>
    </Link>
  );
};

export default SurahCard;
