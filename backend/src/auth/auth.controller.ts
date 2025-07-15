import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginRequestDto, LoginResponseDto } from './dto/login.dto';
import { SuccessResponseDto } from '../common/dto/response.dto';

@ApiTags('인증')
@Controller('api')
export class AuthController {
  @Post('login')
  @ApiOperation({
    summary: '로그인',
    description: '이메일과 비밀번호로 로그인합니다.',
  })
  @ApiResponse({
    status: 200,
    description: '로그인 성공',
    type: SuccessResponseDto<LoginResponseDto>,
  })
  @ApiResponse({
    status: 400,
    description: '잘못된 요청',
  })
  async login(
    @Body() loginDto: LoginRequestDto,
  ): Promise<SuccessResponseDto<LoginResponseDto>> {
    const { email } = loginDto;
    const name = email.split('@')[0];

    return {
      data: {
        email,
        name,
        authToken: 'dummy-token',
      },
    };
  }
}
