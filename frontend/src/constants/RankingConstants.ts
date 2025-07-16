export const categories = [
  { label: '전체', icon: 'ALL' },
  { label: '여성이', icon: '👩🏻' },
  { label: '남성이', icon: '👨🏻' },
  { label: '청소년이', icon: '👦🏻' },
];

export const sorts = ['받고 싶어한', '많이 선물한', '위시로 받은'];

export const targetTypeMap: Record<string, string> = {
  '전체': 'ALL',
  '여성이': 'FEMALE',
  '남성이': 'MALE',
  '청소년이': 'TEEN',
}

export const rankTypeMap: Record<string, string> = {
  '받고 싶어한': 'MANY_WISH',
  '많이 선물한': 'MANY_RECEIVE',
  '위시로 받은': 'MANY_WISH_RECEIVE',
}

export const RANKING_IN_THREE=3;
export const INITIAL_VISIBLE_GIFT_COUNT = 6;

export const TOTAL_GIFT_COUNT = 21;
