import { Message, PlusButton, Wrapper } from '@/components/ChooseFriend/ChooseFriend.styes';
import { getUserInfo } from '../../../storage/userInfo.ts';

export default function ChooseFriend() {
  const userInfo = getUserInfo();
  const email = userInfo?.email;
  const ID = email ? email.split('@')[0] : '';

  return (
    <Wrapper>
      <PlusButton>+</PlusButton>
      <Message>{ID ? `${ID}님!` : ``} 선물한 친구를 선택해 주세요.</Message>
    </Wrapper>
  );
}
