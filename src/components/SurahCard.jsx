import { Link } from 'react-router-dom';

const SurahCard = ({ number, englishName, englishNameTranslation, numberOfAyahs }) => {
  return (
    <Link
      to={`/surah/${number}`}
      className="block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-teal-200 group hover:-translate-y-1"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform shadow-md">
            {number}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-teal-700 transition-colors">
              {englishName}
            </h3>
            <p className="text-sm text-gray-500">{englishNameTranslation}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400 uppercase tracking-wide">Verses</p>
          <p className="text-sm font-bold text-teal-600">{numberOfAyahs}</p>
        </div>
      </div>
    </Link>
  );
};

export default SurahCard;
