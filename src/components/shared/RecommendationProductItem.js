import { ItemBox, ItemImg, ItemText } from "./Itemstyled"

const RecommendationProductItem = ({ imageUrl, brandName, name, price }) => {
  return <ItemBox>
    <ItemImg src={imageUrl} alt={brandName} />
    <div>
      <ItemText>{brandName}</ItemText>
      <ItemText>{name}</ItemText>
      <ItemText>{price}원</ItemText>
    </div>
  </ItemBox>
}
export default RecommendationProductItem