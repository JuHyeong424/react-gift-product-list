import {
  Controller,
  Get,
  Query,
  BadRequestException,
  Param,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { TargetType, RankType } from './dto/ranking-query.dto';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('ranking')
  getRanking(
    @Query('targetType') targetType: string = 'ALL',
    @Query('rankType') rankType: string = 'MANY_WISH',
  ) {
    // targetType 검증
    if (!Object.values(TargetType).includes(targetType as TargetType)) {
      throw new BadRequestException('잘못된 요청입니다.');
    }

    // rankType 검증
    if (!Object.values(RankType).includes(rankType as RankType)) {
      throw new BadRequestException('잘못된 요청입니다.');
    }

    const query = {
      targetType: targetType as TargetType,
      rankType: rankType as RankType,
    };

    const data = this.productsService.getRanking(query);

    return { data };
  }

  @Get(':productId')
  getProductById(@Param('productId', ParseIntPipe) productId: number) {
    const data = this.productsService.getProductById(productId);

    if (!data) {
      throw new NotFoundException('존재하지 않는 상품입니다');
    }

    return { data };
  }

  @Get(':productId/detail')
  async getProductDetail(@Param('productId', ParseIntPipe) productId: number) {
    const data = await this.productsService.getProductDetail(productId);
    return { data };
  }

  @Get(':productId/wish')
  async getProductWish(@Param('productId', ParseIntPipe) productId: number) {
    const data = await this.productsService.getProductWish(productId);
    return { data };
  }

  @Get(':productId/highlight-review')
  async getProductHighlightReview(
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    const data =
      await this.productsService.getProductHighlightReview(productId);

    return { data };
  }

  @Get(':productId/summary')
  getProductSummary(@Param('productId', ParseIntPipe) productId: number) {
    const data = this.productsService.getProductSummary(productId);

    if (!data) {
      throw new NotFoundException('현재 없는 상품입니다');
    }

    return { data };
  }
}
