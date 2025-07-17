import { LOGIN_URL } from './api';
import axios from 'axios';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    email: string;
    name: string;
    password: string;
  }
}

export const login = async (params: LoginRequest) => {
  const res = await axios.post<LoginResponse>(LOGIN_URL, params, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.data;
}
