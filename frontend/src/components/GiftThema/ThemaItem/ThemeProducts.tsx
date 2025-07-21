import useFetchThemesProduct from '@/hooks/fetch/useFetchThemesProduct.ts';
import CardList from '@/components/Common/RankingCard/CardList.tsx';
import {
  ProductsError,
  ProductsList,
  ProductsLoading,
  ThemeProductsWrapper,
} from '@/components/GiftThema/ThemaItem/ThemeProducts.styles.ts';

export default function ThemeProducts({ themeId }: number) {
  const { themeProducts, loading, error } = useFetchThemesProduct(themeId);

  return (
    <ThemeProductsWrapper>
      {loading ? (
        <ProductsLoading>로딩 중...</ProductsLoading>
      ) : error || !themeProducts ? (
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