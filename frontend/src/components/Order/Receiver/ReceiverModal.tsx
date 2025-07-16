import {
  BaseContainer,
  BlurContainer,
  ModalAddBtn,
  ModalText,
  ModalTitle,
} from '@/components/Order/Receiver/Receiver.style.ts';
import ReceiverFormList from '@/components/Order/Receiver/ReceiverFormList.tsx';
import type { FieldArrayWithId, FieldErrors, useForm, UseFormRegister } from 'react-hook-form';
import type { Receiver } from '@/types/order.ts';

interface ReceiverModalProps {
  setModal: (value: boolean) => void;
  fields: FieldArrayWithId<Receiver[], 'receiverInfo'>[];
  register: UseFormRegister<any>;
  handleAdd: () => void;
  handleSubmit: ReturnType<typeof useForm>['handleSubmit'];
  onSubmit: (data: any) => void;
  remove: (index: number) => void;
  errors: FieldErrors;
  handleCancle: () => void;
  isSamePhoneNumber: (phone: string, index: number) => boolean;
}

export default function ReceiverModal({
  setModal,
  fields,
  register,
  handleAdd,
  handleSubmit,
  onSubmit,
  remove,
  errors,
  handleCancle,
  isSamePhoneNumber,
}: ReceiverModalProps) {
  return (
    <>
      <BlurContainer onClick={() => setModal(false)} />
      <BaseContainer>
        <ModalTitle>받는 사람</ModalTitle>
        <ModalText>* 최대 10명까지 추가할 수 있어요.</ModalText>
        <ModalText>* 받는 사람의 전화번호를 중복으로 입력할 수 없어요.</ModalText>
        <ModalAddBtn onClick={handleAdd}>추가하기</ModalAddBtn>

        <ReceiverFormList
          fields={fields}
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          remove={remove}
          errors={errors}
          isSamePhoneNumber={isSamePhoneNumber}
          handleCancle={handleCancle}
        />
      </BaseContainer>
    </>
  );
}
