import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { BASE_URL, PRODUCT_SUMMARY_URL } from '@/api/api.ts';

interface Item {
  id: string | number;
  name: string;
  brandName: string;
  price: string | number;
  imageURL: string;
}

export default function useFetchProductData(id: number) {
  const [product, setProduct] = useState<Item | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProductData = async () => {
      try {
        const res = await axios.get<{ data: Item }>(PRODUCT_SUMMARY_URL(id));
        setProduct(res.data.data);
      } catch (e) {
        const error = e as AxiosError<{ message: string }>;
        const errorMessage =  error.response?.data?.data.message || '상품 정보를 불러오는 중 오류가 발생했습니다.';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  return { product, loading, error };
}
