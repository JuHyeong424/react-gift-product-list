import {
  IsString,
  IsNotEmpty,
  IsArray,
  ValidateNested,
  IsNumber,
  IsPositive,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ReceiverDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsNumber()
  @IsPositive()
  quantity: number;
}

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  productId: number;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsString()
  @IsNotEmpty()
  messageCardId: string;

  @IsString()
  @IsNotEmpty()
  ordererName: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReceiverDto)
  receivers: ReceiverDto[];
}
