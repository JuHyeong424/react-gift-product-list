
import { ItemTitle, ItemWrapper, Loading } from '@/components/Order/ItemInfo/ItemInfo.style.ts';
import Item from '@/components/Common/OrderProductImage/OrderProductImage.tsx';
import useFetchProductData from '@/hooks/fetch/useFetchProductData.ts';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function ItemInfo({ id }: number) {
  const navigate = useNavigate();
  const { product, loading, error } = useFetchProductData(id);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        autoClose: 3000,
      });
      navigate('/');
    }
  }, [error]);

  if (!product) {
    return <div>상품 정보가 없습니다.</div>
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
          brand={product.brandName}
          price={product.price}
        />
      )}

    </ItemWrapper>
  );
}
