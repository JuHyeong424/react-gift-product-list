import { THEMES_PRODUCTS } from '@/api/api.ts';
import useFetchData from '@/hooks/fetch/useFetchData.ts';
import type { Product } from '@/hooks/fetch/useFetchRanking.ts';

interface ThemesProduct {
  list: Product[];
  cursor: number;
  hasMoreList: boolean;
}

export default function useFetchThemesProduct(themesId: number) {
  const url = THEMES_PRODUCTS(themesId);
  const { data: themeProducts, loading, error, statusCode } = useFetchData<ThemesProduct>(url);

  return {
    themeProducts,
    loading,
    error,
    statusCode,
  }
}
