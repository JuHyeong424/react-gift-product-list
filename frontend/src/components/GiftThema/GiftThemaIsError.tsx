import { Error, Section, Title, YellowBox } from '@/components/GiftThema/GiftThema.styles.ts';

export default function GiftThemaIsError() {
  return (
    <Section>
      <Title>선물 테마</Title>
      <Error>상품이 없습니다.</Error>
      <YellowBox>
        <div>카카오테크 캠퍼스 3기 여러분</div>
        <div>프론트엔드 2단계 과제 화이팅! 🎉</div>
      </YellowBox>
    </Section>
  )
}