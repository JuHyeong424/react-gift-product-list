import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../api/api.ts';
import type { Product } from '@/types/productData';

export default function useFetchProductData(id: number) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await axios.get<{ data: Product }>(`${BASE_URL}/products/${id}`)
        setProduct(res.data.data);
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { product, loading, error };
}