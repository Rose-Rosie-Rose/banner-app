import { ItemBox, ItemImg, ItemText } from "./Itemstyled"


const MainBestReview = ({ revImageUrl, mainBestReview, id }) => {
  return <ItemBox>
    <ItemImg src={revImageUrl} alt={`Review${id}`} />
    <div>
      <ItemText>{mainBestReview}</ItemText>
    </div>
  </ItemBox>
}

export default MainBestReview