import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class LoginRequestDto {
  @ApiProperty({
    example: 'user@kakao.com',
    description: '카카오 이메일 주소',
  })
  @IsNotEmpty({ message: '이메일은 필수 입력값입니다.' })
  @IsEmail({}, { message: '올바른 이메일 형식이 아닙니다.' })
  @Matches(/^[a-zA-Z0-9._%+-]+@kakao\.com$/, {
    message: '@kakao.com 이메일 주소만 가능합니다.',
  })
  email: string;

  @ApiProperty({
    example: 'password123',
    description: '비밀번호 (8자 이상)',
  })
  @IsNotEmpty({ message: '비밀번호는 필수 입력값입니다.' })
  @IsString()
  @MinLength(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
  password: string;
}

export class LoginResponseDto {
  @ApiProperty({
    example: 'user@kakao.com',
  })
  email: string;

  @ApiProperty({
    example: 'user',
  })
  name: string;

  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  authToken: string;
}
