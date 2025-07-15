import { Title, Section, ThemeListContainer, YellowBox, Loading } from '@/components/GiftThema/GiftThema.styles';
import ThemeList from '@/components/Common/ThemeList/ThemeList';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function GiftThema() {
  const [themes, setThemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchThemes = async() => {
    try {
      const res = await axios.get('http://localhost:3000/api/themes');
      await new Promise(resolve => setTimeout(resolve, 1000));
      setThemes(res.data.data);
    } catch (e) {
      console.error('GiftTheme api 오류', e);
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchThemes();
  }, []);

  if (loading) {
    return (
      <Section>
        <Title>선물 테마</Title>
        <Loading>로딩 중...</Loading>
      </Section>
    )
  }

  if (error || themes.length === 0) {
    return null;
  }

  console.log(themes);

  return (
    <Section>
      <Title>선물 테마</Title>

      <ThemeListContainer>
        {themes.map((item) => (
          <ThemeList
            key={item.name}
            image={item.image}
            name={item.name}
          />
        ))}
      </ThemeListContainer>

      <YellowBox>
        <div>카카오테크 캠퍼스 3기 여러분</div>
        <div>프론트엔드 2단계 과제 화이팅! 🎉</div>
      </YellowBox>
    </Section>
  );
}
