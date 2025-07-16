import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetchData<T = any>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await axios.get(url);
        setData(res.data.data);
      } catch (e) {
        console.log("api 에러", e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  }
}