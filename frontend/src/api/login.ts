import { LOGIN_URL } from './api.ts';
import axios from 'axios';

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
    if (axios.isAxiosError<{ data?: { message?: string } }>(error)) {
      throw new Error(error.response?.data?.data?.message);
    } else {
      throw new Error('로그인 중 오류가 발생했습니다.');
    }
  }
};
