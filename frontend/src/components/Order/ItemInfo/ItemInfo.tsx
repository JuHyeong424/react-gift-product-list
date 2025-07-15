import {
  ItemTitle,
  ItemWrapper,
} from '@/components/Order/ItemInfo/ItemInfo.style.ts';
import Item from "@/components/Common/OrderProductImage/OrderProductImage.tsx"

interface Props {
  id: number;
}

export default function ItemInfo({ id, ranking }: Props) {
  const item = ranking.find(item => Number(item.id) === id);

  return (
    <ItemWrapper>
      <ItemTitle>상품 정보</ItemTitle>
      <Item
        image={item.imageURL}
        name={item.name}
        brand={item.brandInfo.name}
        price={item.price.sellingPrice}
      />
    </ItemWrapper>
  )
}
