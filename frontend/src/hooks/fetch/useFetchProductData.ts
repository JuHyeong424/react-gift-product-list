import { PRODUCT_SUMMARY_URL } from '@/api/api.ts';
import useFetchData from '@/hooks/fetch/useFetchData.ts';

interface Item {
  id: string | number;
  name: string;
  brandName: string;
  price: string | number;
  imageURL: string;
}

export default function useFetchProductData(id: number) {
  const { data, loading, error } = useFetchData<Item>(PRODUCT_SUMMARY_URL(id));

  return {
    product: data,
    loading,
    error,
  };
}
