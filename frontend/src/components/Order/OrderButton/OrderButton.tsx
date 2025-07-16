import { PriceButton } from '@/components/Order/OrderButton/OrderButton.style.ts';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { renderOrderSuccessToast } from '@/utils/toastContents.tsx';
import { toast } from 'react-toastify';

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

  const item = ranking.find((item) => Number(item.id) === id);
  const price = item.price.sellingPrice * count;

  const onSubmit = (data) => {
    if (!submittedRef.current || submittedRef.current.length === 0) return;

    const { textMessage, senderName } = data;

    toast(renderOrderSuccessToast(item.name, count, senderName, textMessage), {
      type: 'success',
      autoClose: 3000,
      style: { width: '400px' },
    });

    navigate('/');
  };

  return <PriceButton onClick={handleSubmit(onSubmit)}>{price}원 주문하기</PriceButton>;
}
