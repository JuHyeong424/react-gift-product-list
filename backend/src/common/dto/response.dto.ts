import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponseDto {
  @ApiProperty({
    example: {
      status: 'BAD_REQUEST',
      statusCode: 400,
      message: '에러 메시지',
    },
  })
  data: {
    status: string;
    statusCode: number;
    message: string;
  };
}

export class SuccessResponseDto<T> {
  @ApiProperty()
  data: T;
}
