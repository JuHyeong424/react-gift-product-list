import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  createOrder(createOrderDto: CreateOrderDto) {
    // 실제 주문 처리 로직은 여기에 구현
    // 현재는 성공 응답만 반환
    console.log('주문 데이터:', createOrderDto);
    return { success: true };
  }
}
