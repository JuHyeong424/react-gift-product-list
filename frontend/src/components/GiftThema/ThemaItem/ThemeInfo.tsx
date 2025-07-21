import { useParams } from 'react-router-dom';
import useFetchThemesInfo from '@/hooks/fetch/useFetchThemesInfo.ts';
import Header from '@/components/Header/Header.tsx';
import { ThemeInfoHeader, ThemeInfoWrapper } from '@/components/GiftThema/ThemaItem/ThemeInfo.styles.ts';
import ThemeProducts from '@/components/GiftThema/ThemaItem/ThemeProducts.tsx';

export default function ThemeInfo() {
  const { id } = useParams<{ id: string }>();
  const themeId = Number(id);
  const { themeInfo, loading, error } = useFetchThemesInfo(themeId);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러가 발생했습니다</p>;
  if (!themeInfo) return <p>테마 정보를 찾을 수 없습니다</p>;

  return (
    <ThemeInfoWrapper>
      <Header />
      <ThemeInfoHeader background={themeInfo.backgroundColor}>
        <h5>{themeInfo.name}</h5>
        <h2>{themeInfo.title}</h2>
        <p>{themeInfo.description}</p>
      </ThemeInfoHeader>
      <ThemeProducts
          themeId = {themeId}
      />
    </ThemeInfoWrapper>
  )
}