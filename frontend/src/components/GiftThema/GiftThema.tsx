import {
  Title,
  Section,
  ThemeListContainer,
  YellowBox,
  Loading,
} from '@/components/GiftThema/GiftThema.styles';
import ThemeList from '@/components/Common/ThemeList/ThemeList';
import useFetchThemes from '@/hooks/fetch/useFetchThemes.ts';

export default function GiftThema() {
  const { themes, loading, error } = useFetchThemes();

  if (error || !Array.isArray(themes) || themes.length === 0) {
    return <></>;
  }

  return (
    <Section>
      <Title>선물 테마</Title>

      {loading ? (
        <Loading>로딩 중...</Loading>
      ) : (
        <ThemeListContainer>
          {themes.map((item) => (
            <ThemeList key={item.name} image={item.image} name={item.name} />
          ))}
        </ThemeListContainer>
      )}

      <YellowBox>
        <div>카카오테크 캠퍼스 3기 여러분</div>
        <div>프론트엔드 2단계 과제 화이팅! 🎉</div>
      </YellowBox>
    </Section>
  );
}
