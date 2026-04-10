const API_BASE = 'https://api.alquran.cloud/v1';

export const fetchSurahs = async () => {
  const response = await fetch(`${API_BASE}/surah`);
  if (!response.ok) {
    throw new Error(`Failed to fetch surahs: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return data.data;
};

export const fetchAyahs = async (surahNumber) => {
  // Fetch Arabic text and English translation together
  const response = await fetch(`${API_BASE}/surah/${surahNumber}/editions/quran-uthmani,en.asad`);
  if (!response.ok) {
    throw new Error(`Failed to fetch surah ${surahNumber}: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  
  if (data.code !== 200) {
    throw new Error(data.status || 'Failed to fetch surah');
  }
  
  const arabicData = data.data[0];
  const englishData = data.data[1];
  
  // Combine Arabic and English texts
  const combinedAyahs = arabicData.ayahs.map((ayah, index) => ({
    ...ayah,
    text: ayah.text,
    edition: {
      identifier: arabicData.edition.identifier,
      language: arabicData.edition.language,
      name: arabicData.edition.name,
      englishName: arabicData.edition.englishName,
      format: arabicData.edition.format,
      type: arabicData.edition.type,
      direction: arabicData.edition.direction
    },
    englishText: englishData.ayahs[index]?.text || ''
  }));
  
  return {
    number: arabicData.number,
    name: arabicData.name,
    englishName: arabicData.englishName,
    englishNameTranslation: arabicData.englishNameTranslation,
    revelationType: arabicData.revelationType,
    numberOfAyahs: arabicData.numberOfAyahs,
    ayahs: combinedAyahs
  };
};

export const fetchJuz = async (juzNumber) => {
  const response = await fetch(`${API_BASE}/juz/${juzNumber}/editions/quran-uthmani,en.asad`);
  if (!response.ok) {
    throw new Error(`Failed to fetch juz ${juzNumber}: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  
  if (data.code !== 200) {
    throw new Error(data.status || 'Failed to fetch juz');
  }
  
  const arabicData = data.data[0];
  const englishData = data.data[1];
  
  const combinedAyahs = arabicData.ayahs.map((ayah, index) => ({
    ...ayah,
    text: ayah.text,
    englishText: englishData.ayahs[index]?.text || ''
  }));
  
  return {
    number: arabicData.number,
    ayahs: combinedAyahs
  };
};

export const searchQuran = async (query) => {
  const response = await fetch(`${API_BASE}/search/${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error(`Failed to search: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return data.data;
};

export const fetchEditions = async () => {
  const response = await fetch(`${API_BASE}/edition`);
  if (!response.ok) {
    throw new Error(`Failed to fetch editions: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return data.data;
};

export const fetchAyahWithEdition = async (surahNumber, ayahNumber, edition = 'ar.alafasy') => {
  const response = await fetch(`${API_BASE}/ayah/${surahNumber}:${ayahNumber}/${edition}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ayah: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return data.data;
};

export const fetchSurahWithEdition = async (surahNumber, edition = 'ar.alafasy') => {
  const response = await fetch(`${API_BASE}/surah/${surahNumber}/${edition}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch surah with edition: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return data.data;
};
