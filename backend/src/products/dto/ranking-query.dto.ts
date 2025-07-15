import { IsEnum, IsOptional } from 'class-validator';

export enum TargetType {
  ALL = 'ALL',
  FEMALE = 'FEMALE',
  MALE = 'MALE',
  TEEN = 'TEEN',
}

export enum RankType {
  MANY_WISH = 'MANY_WISH',
  MANY_RECEIVE = 'MANY_RECEIVE',
  MANY_WISH_RECEIVE = 'MANY_WISH_RECEIVE',
}

export class RankingQueryDto {
  @IsOptional()
  @IsEnum(TargetType, { message: '잘못된 요청입니다.' })
  targetType?: TargetType = TargetType.ALL;

  @IsOptional()
  @IsEnum(RankType, { message: '잘못된 요청입니다.' })
  rankType?: RankType = RankType.MANY_WISH;
}
