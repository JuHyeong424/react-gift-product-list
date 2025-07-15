import {
  ItemBrand,
  ItemImage,
  ItemImageWrapper,
  ItemName,
  ItemPrice,
} from '@/components/Common/OrderProductImage/OrderProductImage.style.ts';

interface Props {
  image: string;
  name: string;
  brand: string;
  price: number | string;
}

export default function OrderProductImage({ image, name, brand, price }: Props) {
  return (
    <ItemImageWrapper>
      <ItemImage>
        <img src={image} alt={name} />
      </ItemImage>

      <div>
        <ItemName>{name}</ItemName>
        <ItemBrand>{brand}</ItemBrand>
        <ItemPrice><span>상품가</span> {price}원</ItemPrice>
      </div>
    </ItemImageWrapper>
  )
}
