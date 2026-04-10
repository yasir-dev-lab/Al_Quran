import { useState, useEffect } from 'react';
import { fetchSurahs, fetchAyahs, searchQuran } from '../services/quranApi';

export const useSurahs = () => {
  const [surahs, setSurahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSurahs = async () => {
      try {
        const data = await fetchSurahs();
        setSurahs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadSurahs();
  }, []);

  return { surahs, loading, error };
};

export const useSurah = (surahNumber) => {
  const [surahData, setSurahData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!surahNumber) return;

    const loadSurah = async () => {
      try {
        const data = await fetchAyahs(surahNumber);
        setSurahData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadSurah();
  }, [surahNumber]);

  return { surahData, loading, error };
};

export const useSearch = (query) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query || query.trim().length === 0) {
      setResults([]);
      return;
    }

    const search = async () => {
      setLoading(true);
      try {
        const data = await searchQuran(query);
        setResults(data.matches || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(search, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  return { results, loading, error };
};
