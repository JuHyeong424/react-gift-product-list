import { useEffect, useState } from 'react';
import axios from 'axios';
import { RANKING_URL } from '@/constants/url.ts';

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
  const [ranking, setRanking] = useState<Ranking[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchRanking = async() => {
      try {
        const res = await axios.get(RANKING_URL);
        setRanking(res.data.data);
      } catch (e) {
        console.log("Ranking api 에러", e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchRanking();
  }, []);

  return {
    ranking,
    loading,
    error,
  }
}