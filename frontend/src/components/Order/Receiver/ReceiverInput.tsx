import { Input, ItemInput, ReceiverItem } from '@/components/Order/Receiver/Receiver.style.ts';
import type { FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form';

interface Props {
  type?: string;
  label: string;
  name: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  error?: FieldError | null;
}

export default function ReceiverInput({ type = 'text', label, name, placeholder, register, rules, error }: Props) {
  return (
    <ReceiverItem>
      <span>{label}</span>
      <ItemInput>
        <Input
          type={type}
          {...register(name, {
            required: `${label}를 입력해주세요`,
            ...rules, // 여기에 rules 삽입
          })}
          isActive={!!error}
          placeholder={placeholder}
        />
        {error?.message && <p>{error.message}</p>}
      </ItemInput>
    </ReceiverItem>
  );
}
