import { RANKING_URL } from '@/api/api.ts';
import useFetchData from '@/hooks/fetch/useFetchData.ts';
import type { Product } from '@/types/productData';

export default function useFetchRanking(targetType: string, rankType: string) {
  const {
    data: ranking,
    loading,
    error,
  } = useFetchData<Product>(RANKING_URL, {
    targetType,
    rankType,
  });

  return {
    ranking,
    loading,
    error,
  };
}
