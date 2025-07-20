import axios from 'axios';
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
  data: {
    success: boolean;
  };
}

export default async function order(data: OrderRequest) {
  const userInfo = getUserInfo();
  const token = userInfo?.authToken;

  try {
    const res = await axios.post<OrderResponse>(ORDER_URL, data, {
      headers: {
        Authorization: token || '',
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError<{ data?: { message?: string } }>(error)) {
      throw new Error(error.response?.data?.data?.message);
    } else {
      throw new Error('주문에 실패했습니다.');
    }
  }
}
