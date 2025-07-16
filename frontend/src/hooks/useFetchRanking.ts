import { RANKING_URL } from '@/constants/url.ts';
import useFetchData from '@/hooks/useFetchData.ts';

interface Ranking {
  id: string | number;
  name: string;
  price: {
    basicPrice: string | number;
    sellingPrice: string;
    discountRate: string | number;
  }
  imageURL: string;
  brandInfo: {
    id: string | number;
    name: string;
    imageURL: string;
  }
}

export default function useFetchRanking() {
  const { data: ranking ,loading, error } = useFetchData<Ranking>(RANKING_URL);

  return {
    ranking,
    loading,
    error,
  };
}
