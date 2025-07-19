import { THEME_URL } from '@/api/api.ts';
import useFetchData from '@/hooks/fetch/useFetchData.ts';

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
  };
}
