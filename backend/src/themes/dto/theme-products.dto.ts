import { IsOptional, IsNumber, Min } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ThemeProductsQueryDto {
  @ApiProperty({
    description: '커서 (페이지네이션)',
    required: false,
    example: 0,
  })
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(0)
  cursor?: number = 0;

  @ApiProperty({
    description: '한 페이지당 조회할 상품 수',
    required: false,
    example: 10,
  })
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @Min(1)
  limit?: number = 10;
}

export class ThemeProductsResponseDto {
  @ApiProperty({
    description: '상품 목록',
    type: 'array',
  })
  list: any[];

  @ApiProperty({
    description: '다음 페이지 커서',
    example: 10,
  })
  cursor: number;

  @ApiProperty({
    description: '더 많은 데이터 존재 여부',
    example: true,
  })
  hasMoreList: boolean;
}
