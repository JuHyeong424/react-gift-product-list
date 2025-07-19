import { Message, PlusButton, Wrapper } from '@/components/ChooseFriend/ChooseFriend.styes';
import { getUserInfo } from '@/storage/userInfo.ts';

export default function ChooseFriend() {
  const userInfo = getUserInfo();
  const name = userInfo?.name;

  return (
    <Wrapper>
      <PlusButton>+</PlusButton>
      <Message>{name ? `${name}님!` : ``} 선물한 친구를 선택해 주세요.</Message>
    </Wrapper>
  );
}
