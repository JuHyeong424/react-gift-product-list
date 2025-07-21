import useFetchThemesProduct from '@/hooks/fetch/useFetchThemesProduct.ts';

export default function ThemeProducts(themeId: number) {
  const { themeProducts, loading, error } = useFetchThemesProduct(themeId);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러가 발생했습니다</p>;
  if (!themeProducts) return <p>테마 정보를 찾을 수 없습니다</p>;

  return (

  )
}