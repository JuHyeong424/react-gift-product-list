import { useEffect, useState } from 'react';
import axios from 'axios';

interface Theme {
  themeId: number;
  name: string;
  image: string;
}

export default function useFetchThemes() {
  const [themes, setThemes] = useState<Theme[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchThemes = async() => {
      try {
        const res = await axios.get('http://localhost:3000/api/themes');
        await new Promise(resolve => setTimeout(resolve, 1000));
        setThemes(res.data.data);
      } catch (e) {
        console.error('GiftTheme api 오류', e);
        setError(e);
      } finally {
        setLoading(false);
      }
    }

    fetchThemes();
  }, []);

  return {
    themes,
    loading,
    error,
  }
}