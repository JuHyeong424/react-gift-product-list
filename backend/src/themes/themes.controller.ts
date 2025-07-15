import {
  Controller,
  Get,
  Param,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ThemesService } from './themes.service';
import { SuccessResponseDto } from '../common/dto/response.dto';
import {
  ThemeProductsQueryDto,
  ThemeProductsResponseDto,
} from './dto/theme-products.dto';

@ApiTags('테마')
@Controller('api/themes')
export class ThemesController {
  constructor(private readonly themesService: ThemesService) {}

  @Get()
  @ApiOperation({
    summary: '테마 목록 조회',
    description: '모든 테마의 기본 정보를 조회합니다.',
  })
  @ApiResponse({
    status: 200,
    description: '테마 목록 조회 성공',
  })
  async getThemes(): Promise<SuccessResponseDto<any>> {
    const themes = await this.themesService.getThemes();
    return { data: themes };
  }

  @Get(':themeId/info')
  @ApiOperation({
    summary: '테마 상세 정보 조회',
    description: '특정 테마의 상세 정보를 조회합니다.',
  })
  @ApiResponse({
    status: 200,
    description: '테마 상세 정보 조회 성공',
  })
  @ApiResponse({
    status: 400,
    description: '해당 ID에 일치하는 데이터가 없습니다.',
  })
  async getThemeInfo(
    @Param('themeId') themeId: number,
  ): Promise<SuccessResponseDto<any>> {
    const theme = await this.themesService.getThemeInfo(themeId);
    if (!theme) {
      throw new NotFoundException('해당 ID에 일치하는 데이터가 없습니다.');
    }
    return { data: theme };
  }

  @Get(':themeId/products')
  @ApiOperation({
    summary: '테마별 상품 목록 조회',
    description: '특정 테마의 상품 목록을 페이지네이션으로 조회합니다.',
  })
  @ApiResponse({
    status: 200,
    description: '테마별 상품 목록 조회 성공',
    type: ThemeProductsResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: '해당 테마를 찾을 수 없습니다.',
  })
  async getThemeProducts(
    @Param('themeId') themeId: number,
    @Query() query: ThemeProductsQueryDto,
  ): Promise<SuccessResponseDto<ThemeProductsResponseDto>> {
    const result = await this.themesService.getThemeProducts(themeId, query);

    // 테마가 존재하지 않고 결과가 빈 경우 404 에러
    if (
      result.list.length === 0 &&
      result.cursor === 0 &&
      !result.hasMoreList
    ) {
      const theme = await this.themesService.getThemeInfo(themeId);
      if (!theme) {
        throw new NotFoundException('해당 테마를 찾을 수 없습니다.');
      }
    }

    return { data: result };
  }
}
