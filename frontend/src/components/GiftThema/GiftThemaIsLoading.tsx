import { Loading, Section, Title, YellowBox } from '@/components/GiftThema/GiftThema.styles.ts';

export default function GiftThemaIsLoading() {
  return (
    <Section>
      <Title>선물 테마</Title>
      <Loading>로딩 중...</Loading>
      <YellowBox>
        <div>카카오테크 캠퍼스 3기 여러분</div>
        <div>프론트엔드 2단계 과제 화이팅! 🎉</div>
      </YellowBox>
    </Section>
  )
}