import axios, { AxiosError } from 'axios';
import { ORDER_URL } from './api.ts';
import { getUserInfo } from '@/storage/userInfo.ts';

export interface OrderRequest {
  productId: string | number;
  message: string;
  messageCardId: string;
  ordererName: string;
  receivers: {
    name: string;
    phoneNumber: string;
    quantity: number;
  }[];
}

interface OrderResponse {
  success: boolean;
}

export default async function order(data: OrderRequest) {
  const userInfo = getUserInfo();
  const token = userInfo?.authToken;

  try {
    const res = await axios.post<OrderResponse>(ORDER_URL, data, {
      headers: {
        Authorization: token || '',
        'Content-Type': 'application/json',
      }
    });
    return res.data;
  } catch (error) {
    const err = error as AxiosError<{ message?: string }>;
    console.error('주문 요청 실패:', err.response?.data);
    throw new Error(err.response?.data?.data?.message || '주문에 실패했습니다.');
  }
}
