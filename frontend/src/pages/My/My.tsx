import Header from '@/components/Header/Header.tsx';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path.ts';
import { Content, LogoutBtn, Title } from '@/pages/My/My.style.ts';
import { clearUserInfo, getUserInfo } from '../../../storage/userInfo.ts';

export default function My() {
  const navigate = useNavigate();
  const userInfo = getUserInfo();
  const email = userInfo?.email;
  const name = userInfo?.name;

  const handleLogout = () => {
    clearUserInfo();
    navigate(PATH.LOGIN);
  };

  return (
    <>
      <Header />
      <Title>마이 페이지</Title>
      <Content>
        <p>{name}님 안녕하세요!</p>
        <p>이메일 주소는 {email}입니다.</p>
      </Content>
      <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
    </>
  );
}
