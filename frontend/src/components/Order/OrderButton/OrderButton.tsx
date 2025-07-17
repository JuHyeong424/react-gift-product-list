import { PriceButton } from '@/components/Order/OrderButton/OrderButton.style.ts';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { renderOrderSuccessToast } from '@/utils/toastContents.tsx';
import { toast } from 'react-toastify';
import useFetchProductData from '@/hooks/fetch/useFetchProductData.ts';
import { useEffect } from 'react';
import { getUserInfo } from '../../../../storage/userInfo.ts';
import order from '../../../../api/order.ts';

interface Props {
  id: number;
  count: number;
  receiverForm: {
    submittedRef: React.MutableRefObject<{ name: string; phone: string; count: number }[] | null>;
  };
}

export default function OrderButton({ id, count, receiverForm }: Props) {
  const { handleSubmit } = useFormContext();
  const { submittedRef } = receiverForm;
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

  const price = product.price * count;

  const onSubmit = async (data) => {
    const userInfo = getUserInfo();
    const token = userInfo?.authToken;

    if (!token) {
      toast.error('로그인이 필요합니다.');
      navigate('/login');
      return;
    }

    if (!submittedRef.current || submittedRef.current.length === 0) {
      toast.error('받는 사람 정보를 입력해주세요.');
      return;
    }

    const { textMessage, senderName, messageCardId } = data;

    const orderData = {
      productId: product.id,
      message: textMessage,
      messageCardId: String(messageCardId),
      ordererName: senderName,
      receivers: submittedRef.current.map(({ name, phone, count }) => ({
        name,
        phoneNumber: phone,
        quantity: Number(count),
      })),
    }

    try {
      const result = await order(orderData);
      if (result.data?.success) {
        toast(renderOrderSuccessToast(product.name, count, senderName, textMessage), {
          type: 'success',
          autoClose: 3000,
          style: { width: '400px' },
        });
        navigate('/');
      }
    } catch (error) {
      toast.error(error.message || '주문 중 오류가 발생했습니다.');
    }
  };

  return (
    <>
      {loading ? (
          <div>상품 정보를 불러올 수 없습니다.</div>
        ) : (
          <PriceButton onClick={handleSubmit(onSubmit)}>{price}원 주문하기</PriceButton>
        )}
    </>
  )
}
