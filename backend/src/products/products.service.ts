import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { RankingQueryDto, RankType, TargetType } from './dto/ranking-query.dto';
import { match } from 'ts-pattern';
import { PRODUCTS_BAKERY_DATA } from 'src/data/products/bakeryData';
import { PRODUCTS_CHICKEN_DATA } from 'src/data/products/chickenData';
import { PRODUCTS_ICECREAM_DATA } from 'src/data/products/icecreamData';
import { PRODUCTS_CVS_DATA } from 'src/data/products/cvsData';
import { PRODUCTS_PIZZA_DATA } from 'src/data/products/pizzaData';
import { PRODUCTS_PUB_DATA } from 'src/data/products/pubData';
import axios from 'axios';

@Injectable()
export class ProductsService {
  public getAllProducts() {
    return [
      ...PRODUCTS_BAKERY_DATA,
      ...PRODUCTS_CHICKEN_DATA,
      ...PRODUCTS_ICECREAM_DATA,
      ...PRODUCTS_CVS_DATA,
      ...PRODUCTS_PIZZA_DATA,
      ...PRODUCTS_PUB_DATA,
    ];
  }

  async getProductDetail(productId: number): Promise<{
    description: string;
    announcements: {
      name: string;
      value: string;
      displayOrder: number;
    }[];
  }> {
    try {
      const response = await axios.get(
        `https://gift.kakao.com/a/product-detail/v2/products/${productId}`,
      );

      const { productDetailDescription = '', announcements } =
        response.data.itemDetails.item;

      return {
        description: productDetailDescription,
        announcements,
      };
    } catch {
      throw new InternalServerErrorException('문제가 발생했어요.');
    }
  }

  async getProductWish(
    productId: number,
  ): Promise<{ wishCount: number; isWished: boolean }> {
    try {
      const response = await axios.get(
        `https://gift.kakao.com/a/product-detail/v1/items/${productId}/wishes/wish`,
      );

      const { wishCount = 0 } = response.data;

      return { wishCount, isWished: false };
    } catch {
      throw new InternalServerErrorException('문제가 발생했어요.');
    }
  }

  async getProductHighlightReview(productId: number): Promise<{
    totalCount: number;
    reviews: {
      id: string;
      authorName: string;
      content: string;
    }[];
  }> {
    try {
      const response = await axios.get(
        `https://gift.kakao.com/a/product-detail/v2/review/products/${productId}?page=0&sortProperty=SCORE&size=10`,
      );

      const { totalCount, contents } = response.data.reviewList;

      return {
        totalCount,
        reviews: contents.map(({ id, writer, content }) => ({
          id,
          authorName: writer?.nickname,
          content,
        })),
      };
    } catch {
      throw new InternalServerErrorException('문제가 발생했어요.');
    }
  }

  getProductSummary(productId: number) {
    const allProducts = this.getAllProducts();
    const product = allProducts.find((p) => p.id === productId);

    if (!product) {
      return null;
    }

    return {
      id: product.id,
      name: product.name,
      brandName: product.brandInfo.name,
      price: product.price.sellingPrice,
      imageURL: product.imageURL,
    };
  }

  getProductById(productId: number) {
    const allProducts = this.getAllProducts();
    const product = allProducts.find((p) => p.id === productId);

    if (!product) {
      return null;
    }

    return product;
  }

  getRanking(query: Required<RankingQueryDto>) {
    const { targetType, rankType } = query;

    return match([targetType, rankType])
      .with([TargetType.ALL, RankType.MANY_WISH], () => {
        return [...PRODUCTS_BAKERY_DATA].reverse().slice(0, 20);
      })
      .with([TargetType.ALL, RankType.MANY_RECEIVE], () => {
        return PRODUCTS_BAKERY_DATA.slice(0, 20);
      })
      .with([TargetType.ALL, RankType.MANY_WISH_RECEIVE], () => {
        return PRODUCTS_BAKERY_DATA.filter(
          (product) => product.id % 2 === 0,
        ).slice(0, 20);
      })
      .with([TargetType.FEMALE, RankType.MANY_WISH], () => {
        return [...PRODUCTS_CHICKEN_DATA].reverse().slice(0, 20);
      })
      .with([TargetType.FEMALE, RankType.MANY_RECEIVE], () => {
        return PRODUCTS_CHICKEN_DATA.slice(0, 20);
      })
      .with([TargetType.FEMALE, RankType.MANY_WISH_RECEIVE], () => {
        return PRODUCTS_CHICKEN_DATA.filter(
          (product) => product.id % 2 === 0,
        ).slice(0, 20);
      })
      .with([TargetType.MALE, RankType.MANY_WISH], () => {
        return [...PRODUCTS_ICECREAM_DATA].reverse().slice(0, 20);
      })
      .with([TargetType.MALE, RankType.MANY_RECEIVE], () => {
        return PRODUCTS_ICECREAM_DATA.slice(0, 20);
      })
      .with([TargetType.MALE, RankType.MANY_WISH_RECEIVE], () => {
        return PRODUCTS_ICECREAM_DATA.filter(
          (product) => product.id % 2 === 0,
        ).slice(0, 20);
      })
      .otherwise(() => {
        return [];
      });
  }
}
