import { useNavigate, useParams } from 'react-router-dom';
import useFetchThemesInfo from '@/hooks/fetch/useFetchThemesInfo.ts';
import Header from '@/components/Header/Header.tsx';
import {
  ThemeInfoHeader,
  ThemeInfoWrapper,
} from '@/components/GiftThema/ThemaItem/ThemeInfo.styles.ts';
import ThemeProducts from '@/components/GiftThema/ThemaItem/ThemeProducts.tsx';
import { useEffect } from 'react';
import {
  ProductsError,
  ProductsLoading,
} from '@/components/GiftThema/ThemaItem/ThemeProducts.styles.ts';
import { PATH } from '@/constants/path.ts';

export default function ThemeInfo() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const themeId = Number(id);
  const { themeInfo, loading, error, statusCode } = useFetchThemesInfo(themeId);

  useEffect(() => {
    if (statusCode === 404) {
      navigate(`${PATH.HOME}`);
    }
  }, [statusCode, navigate]);

  return (
    <ThemeInfoWrapper>
      <Header />

      {loading ? (
        <ProductsLoading>로딩 중...</ProductsLoading>
      ) : error || !themeInfo ? (
        <ProductsError>테마 정보를 찾을 수 없습니다.</ProductsError>
      ) : (
        <ThemeInfoHeader background={themeInfo.backgroundColor}>
          <h5>{themeInfo.name}</h5>
          <h2>{themeInfo.title}</h2>
          <p>{themeInfo.description}</p>
        </ThemeInfoHeader>
      )}

      <ThemeProducts themeId={themeId} />
    </ThemeInfoWrapper>
  );
}
