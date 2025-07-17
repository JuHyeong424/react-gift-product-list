import ItemInfo from '@/components/Order/ItemInfo/ItemInfo.tsx';
import Header from '@/components/Header/Header.tsx';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Receiver from '@/components/Order/Receiver/Receiver.tsx';
import Message from '@/components/Order/Message/Message.tsx';
import OrderButton from '@/components/Order/OrderButton/OrderButton.tsx';
import Sender from '@/components/Order/Sender/Sender.tsx';
import { FormProvider, useForm } from 'react-hook-form';
import useReceiverForm from '@/hooks/order/receiver/useReceiverForm.ts';
import { Wrapper } from '@/pages/Order/Order.style.ts';

export default function Order() {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);
  const location = useLocation();

  const [count, setCount] = useState(0);
  const receiverForm = useReceiverForm();

  useEffect(() => {
    // 컴포넌트가 마운트(처음 렌더링) 될 때 스크롤을 맨 위로 이동
    window.scrollTo({ top: 0 });
  }, []);

  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      textMessage: '',
      senderName: '',
      receiverName: '',
      receiverPhone: '',
    },
  });

  return (
    <Wrapper>
      <Header />
      <FormProvider {...methods}>
        <Message />
        <Sender />
        <Receiver setCount={setCount} receiverForm={receiverForm} />
        <ItemInfo id={id} />
        <OrderButton id={id} count={count} receiverForm={receiverForm} />
      </FormProvider>
    </Wrapper>
  );
}
