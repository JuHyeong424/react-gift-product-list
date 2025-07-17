import { useEffect, useState } from 'react';
import axios from 'axios';
import * as qs from 'qs';

export default function useFetchData<T>(url: string, params?: Record<string, any>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<{ data: T }>(url, { params });
        setData(res.data.data);
      } catch (e) {
        console.log('api 에러', e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, qs.stringify(params)]); // 객체를 문자열로 변환하여 내용이 동일하면 감지x

  return {
    data,
    loading,
    error,
  };
}
