import { Error, ItemTitle, ItemWrapper, Loading } from '@/components/Order/ItemInfo/ItemInfo.style.ts';
import Item from '@/components/Common/OrderProductImage/OrderProductImage.tsx';
import useFetchProductData from '@/hooks/fetch/useFetchProductData.ts';

export default function ItemInfo({ id }: number) {
  const { product, loading, error } = useFetchProductData(id);

  if (error || !product) {
    return (
      <ItemWrapper>
        <ItemTitle>상품 정보</ItemTitle>
        <Error>상품 정보를 불러올 수 없습니다.</Error>
      </ItemWrapper>
    );
  }

  return (
    <ItemWrapper>
      <ItemTitle>상품 정보</ItemTitle>

      {loading ? (
        <Loading>로딩 중...</Loading>
      ) : (
        <Item
          image={product.imageURL}
          name={product.name}
          brand={product.brandInfo.name}
          price={product.price.sellingPrice}
        />
      )}

    </ItemWrapper>
  );
}
