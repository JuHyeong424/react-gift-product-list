import {
  Controller,
  Post,
  Body,
  Headers,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('api/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  createOrder(
    @Headers('authorization') authorization: string,
    @Body() createOrderDto: CreateOrderDto,
  ) {
    // Authorization 헤더 검증
    if (!authorization || authorization !== 'dummy-token') {
      throw new UnauthorizedException('로그인이 필요합니다');
    }

    if (createOrderDto.receivers.length <= 0) {
      throw new BadRequestException('받는 사람이 없습니다');
    }

    const data = this.orderService.createOrder(createOrderDto);

    return { data };
  }
}
