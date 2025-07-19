import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import * as qs from 'qs';

export default function useFetchData<T>(url: string, params?: Record<string, any>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<{ data: T }>(url, { params });
        setData(res.data.data);
      } catch (e) {
        const error = e as AxiosError<{ message: string }>;
        const errorMessage =
          error.response?.data?.data.message || '상품 정보를 불러오는 중 오류가 발생했습니다.';
        setError(errorMessage);
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
