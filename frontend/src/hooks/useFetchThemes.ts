import { THEME_URL } from '@/constants/url.ts';
import useFetchData from '@/hooks/useFetchData.ts';

interface Theme {
  themeId: number;
  name: string;
  image: string;
}

export default function useFetchThemes() {
  const { data: themes, loading, error } = useFetchData<Theme>(THEME_URL);

  return {
    themes,
    loading,
    error,
  }
}