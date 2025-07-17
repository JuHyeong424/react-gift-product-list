import { PriceButton } from '@/components/Order/OrderButton/OrderButton.style.ts';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { renderOrderSuccessToast } from '@/utils/toastContents.tsx';
import { toast } from 'react-toastify';
import useFetchProductData from '@/hooks/fetch/useFetchProductData.ts';
import { ItemTitle, ItemWrapper } from '@/components/Order/ItemInfo/ItemInfo.style.ts';

interface Props {
  id: number;
  count: number;
  receiveForm: {
    submittedRef: React.MutableRefObject<{ count: number }[] | null>;
  };
}

export default function OrderButton({ id, ranking, count, receiverForm }: Props) {
  const { handleSubmit } = useFormContext();
  const { submittedRef } = receiverForm;
  const navigate = useNavigate();

  const { product, loading, error } = useFetchProductData(id);

  if (loading) {
    return (
      <ItemWrapper>
        <ItemTitle>상품 정보</ItemTitle>
        <div>로딩 중...</div>
      </ItemWrapper>
    );
  }

  if (error || !product) {
    return (
      <ItemWrapper>
        <ItemTitle>상품 정보</ItemTitle>
        <div>상품 정보를 불러올 수 없습니다.</div>
      </ItemWrapper>
    );
  }
  const price = product.price.sellingPrice * count;

  const onSubmit = (data) => {
    if (!submittedRef.current || submittedRef.current.length === 0) return;

    const { textMessage, senderName } = data;

    toast(renderOrderSuccessToast(product.name, count, senderName, textMessage), {
      type: 'success',
      autoClose: 3000,
      style: { width: '400px' },
    });

    navigate('/');
  };

  return <PriceButton onClick={handleSubmit(onSubmit)}>{price}원 주문하기</PriceButton>;
}
