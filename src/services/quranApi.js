const API_BASE = 'https://api.alquran.cloud/v1';

export const fetchSurahs = async () => {
  const response = await fetch(`${API_BASE}/surah`);
  const data = await response.json();
  return data.data;
};

export const fetchAyahs = async (surahNumber) => {
  const response = await fetch(`${API_BASE}/surah/${surahNumber}`);
  const data = await response.json();
  return data.data;
};

export const fetchJuz = async (juzNumber) => {
  const response = await fetch(`${API_BASE}/juz/${juzNumber}`);
  const data = await response.json();
  return data.data;
};

export const searchQuran = async (query) => {
  const response = await fetch(`${API_BASE}/search/${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.data;
};

export const fetchEditions = async () => {
  const response = await fetch(`${API_BASE}/edition`);
  const data = await response.json();
  return data.data;
};

export const fetchAyahWithEdition = async (surahNumber, ayahNumber, edition = 'ar.alafasy') => {
  const response = await fetch(`${API_BASE}/ayah/${surahNumber}:${ayahNumber}/${edition}`);
  const data = await response.json();
  return data.data;
};

export const fetchSurahWithEdition = async (surahNumber, edition = 'ar.alafasy') => {
  const response = await fetch(`${API_BASE}/surah/${surahNumber}/${edition}`);
  const data = await response.json();
  return data.data;
};
