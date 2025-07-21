import useFetchThemesProduct from '@/hooks/fetch/useFetchThemesProduct.ts';
import CardList from '@/components/Common/RankingCard/CardList.tsx';
import {
  ProductsError,
  ProductsList,
  ProductsLoading,
  ThemeProductsWrapper,
} from '@/components/GiftThema/ThemaItem/ThemeProducts.styles.ts';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

export default function ThemeProducts({ themeId }: number) {
  const navigate = useNavigate();
  const { themeProducts, loading, error, statusCode } = useFetchThemesProduct(themeId);

  useEffect(() => {
    if (statusCode === 404) {
      navigate(`${PATH.HOME}`);
    }
  }, [statusCode, navigate]);

  console.log({ error, themeProducts, list: themeProducts?.list });

  return (
    <ThemeProductsWrapper
      error={error}
      product={themeProducts?.list.length}
    >
      {loading ? (
        <ProductsLoading>로딩 중...</ProductsLoading>
      ) : error || themeProducts?.list.length === 0 ? (
        <ProductsError>상품이 없습니다.</ProductsError>
      ) : (
        <>
          <ProductsList>
            {themeProducts?.list.map((item) => (
              <CardList
                key={item.id}
                image={item.imageURL}
                name={item.name}
                price={item.price.sellingPrice}
                brand={item.brandInfo.name}
              />
            ))}
          </ProductsList>
        </>
      )}
    </ThemeProductsWrapper>

  )
}
