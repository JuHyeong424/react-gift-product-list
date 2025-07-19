import { LOGIN_URL } from './api.ts';
import axios, { AxiosError } from 'axios';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  email: string;
  name: string;
  authToken: string;
}

export const login = async (params: LoginRequest) => {
  try {
    const res = await axios.post<LoginResponse>(LOGIN_URL, params);
    return res.data;
  } catch (error) {
    const err = error as AxiosError<{ data?: { message?: string } }>;
    throw new Error(err.response?.data?.data?.message || '로그인 중 오류가 발생했습니다.');
  }
};
