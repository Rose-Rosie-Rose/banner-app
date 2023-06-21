import { useEffect, useState } from "react"
import { useUserContext } from "../../contexts/user"
import ArrowBtn from "../../shared/ArrowBtn"
import RecommendationProductItem from "../../shared/RecommendationProductItem"
import { Items, ItemsTextBox } from "../../shared/Itemstyled"

const RecommendationProduct = () => {
  const [recommenItems, setRecommenItems] = useState([])

  useEffect(() => {
    const fetchRecommenItems = async () => {
      const response = await fetch('http://localhost:8888/preitems')
      const data = await response.json()

      setRecommenItems(data)
    }
    fetchRecommenItems()
  }, [])

  const { user } = useUserContext()
  return <div style={{ width: "100vh", margin: "94px auto 0 auto", padding: "0 3%", position: "relative", boxSizing: "border-box" }}>
    <Items>
      <ItemsTextBox>
        {user ? `${user.name}님을 위한 추천상품` : '고객님을 위한 추천상품'}
      </ItemsTextBox>
      <ArrowBtn left />
      {recommenItems.map(({ brandName, name, imageUrl, id, price }) => {
        return <RecommendationProductItem
                key={id}
                brandName={brandName}
                imageUrl={imageUrl}
                name={name}
                price={price}
              />
      })}
      <ArrowBtn right />
    </Items>
  </div>
}

export default RecommendationProduct