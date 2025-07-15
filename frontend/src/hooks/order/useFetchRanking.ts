import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetchRanking() {
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchRanking = async() => {
      try {
        const res = await axios.get('http://localhost:3000/api/products/ranking');
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