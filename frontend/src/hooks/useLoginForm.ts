import { useState } from 'react';
import { PASSWORD_LENGTH } from '../constants/password.ts';
import { isValidEmailRegex } from '@/utils/validation.ts';

export const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleEmailCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    setIsValidEmail(isValidEmailRegex(value));
  };

  const handlePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    setIsValidPassword(value.length >= PASSWORD_LENGTH);
  };

  const isFormValid = !isValidEmail || !isValidPassword || email === '' || password === '';

  return {
    email,
    password,
    isValidEmail,
    isValidPassword,
    handleEmailCheck,
    handlePasswordCheck,
    isFormValid,
  };
};
