import { Section, Title, Error } from '@/components/GiftRanking/GiftRanking.styles.ts';
import RankingFilterSelection from '@/components/Common/RankingFilterSelection/RankingFilterSelection.tsx';

export default function GiftRankingIsError({ category, setCategory, sort, setSort }) {
  return (
    <Section>
      <Title>실시간 급상승 선물랭킹</Title>
      <RankingFilterSelection
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />
      <Error>상품이 없습니다.</Error>
    </Section>
  )
}