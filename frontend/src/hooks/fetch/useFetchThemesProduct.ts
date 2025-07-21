import { THEMES_PRODUCTS } from '@/api/api.ts';
import useInfiniteFetchThemesProduct from '@/hooks/fetch/useInfiniteFetchThemesProduct.ts';
import { useCallback, useEffect, useRef } from 'react';

export default function useFetchThemesProduct(themesId: number) {
  const url = THEMES_PRODUCTS(themesId);
  const {
    list,
    loading,
    error,
    hasMore,
    fetchNextPage: fetchData,
    statusCode,
  } = useInfiniteFetchThemesProduct(url);
  const observerRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore && !loading) {
        fetchData();
      }
    },
    [fetchData, hasMore, loading],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 0.1 });

    const current = observerRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [handleObserver]);

  return {
    list,
    loading,
    error,
    statusCode,
    observerRef,
  };
}
