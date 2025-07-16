import { Section, Title, Loading } from '@/components/GiftRanking/GiftRanking.styles.ts';
import RankingFilterSelection from '@/components/Common/RankingFilterSelection/RankingFilterSelection.tsx';

export default function GiftRankingIsLoading({ category, setCategory, sort, setSort }) {
  return (
    <Section>
      <Title>실시간 급상승 선물랭킹</Title>
      <RankingFilterSelection
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />
      <Loading>로딩 중...</Loading>
    </Section>
  )
}