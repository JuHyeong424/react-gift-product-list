import { Injectable } from '@nestjs/common';
import { THEMES_DATA } from 'src/data/themes/data';
import {
  ThemeProductsQueryDto,
  ThemeProductsResponseDto,
} from './dto/theme-products.dto';
import { match } from 'ts-pattern';
import { PRODUCTS_BAKERY_DATA } from 'src/data/products/bakeryData';
import { PRODUCTS_PIZZA_DATA } from 'src/data/products/pizzaData';
import { PRODUCTS_PUB_DATA } from 'src/data/products/pubData';
import { PRODUCTS_ICECREAM_DATA } from 'src/data/products/icecreamData';
import { PRODUCTS_CVS_DATA } from 'src/data/products/cvsData';
import { PRODUCTS_CHICKEN_DATA } from 'src/data/products/chickenData';

@Injectable()
export class ThemesService {
  private readonly themesData: any;

  constructor() {
    this.themesData = THEMES_DATA;
  }

  async getThemes() {
    return this.themesData.map((theme: any) => ({
      themeId: theme.themeId,
      name: theme.name,
      image: theme.image,
    }));
  }

  async getThemeInfo(themeId: number) {
    const theme = this.themesData.find(
      (theme: any) => theme.themeId === themeId,
    );

    if (!theme) {
      return null;
    }

    return {
      themeId: theme.themeId,
      name: theme.name,
      title: theme.title,
      description: theme.description,
      backgroundColor: theme.backgroundColor,
    };
  }

  async getThemeProducts(
    themeId: number,
    query: ThemeProductsQueryDto,
  ): Promise<ThemeProductsResponseDto> {
    const theme = this.themesData.find(
      (theme: any) => theme.themeId === themeId,
    );
    if (!theme) {
      return {
        list: [],
        cursor: 0,
        hasMoreList: false,
      };
    }

    const products = match([theme.themeId as number])
      .with([2920], () => [...PRODUCTS_BAKERY_DATA])
      .with([3303], () => [...PRODUCTS_PIZZA_DATA])
      .with([3142], () => [...PRODUCTS_CHICKEN_DATA])
      .with([3137], () => [...PRODUCTS_ICECREAM_DATA])
      .with([2921], () => [...PRODUCTS_CVS_DATA])
      .with([3302], () => [...PRODUCTS_PUB_DATA])
      .otherwise(() => {
        return [];
      });

    const { cursor = 0, limit = 10 } = query;

    // 페이지네이션 적용
    const startIndex = cursor;
    const endIndex = startIndex + limit;
    const paginatedProducts = products.slice(startIndex, endIndex);

    // 다음 페이지 존재 여부 확인
    const hasMoreList = endIndex < products.length;
    const nextCursor = hasMoreList ? endIndex : cursor;

    return {
      list: paginatedProducts,
      cursor: nextCursor,
      hasMoreList,
    };
  }
}
