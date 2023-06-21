import { useEffect, useState } from "react"
import MainBestReview from "../../shared/MainBestReview"
import ArrowBtn from "../../shared/ArrowBtn"
import { Items, ItemsTextBox } from "../../shared/Itemstyled"

const SHOW_COUNT = 5

const BestReviewList = () => {
  const [revItems, setRevItems] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchRevItems = async () => {
      const response = await fetch('http://localhost:8888/bestReview')
      const data = await response.json()

      setRevItems(data)
    }
    fetchRevItems()
  }, [])

  const visibleItems = revItems.slice((page - 1) * SHOW_COUNT, SHOW_COUNT * page)
  // const handleArrowBtnClick = () => {
  //   
  //    //[...revItems].slice(currentPage * showCount, showCount)
  //  }

  return <div style={{ width: "1080px", margin: "94px auto 0 auto", padding: "0 3%", position: "relative", boxSizing: "border-box" }}>
    <Items>
      <ItemsTextBox>
        베스트 리뷰
      </ItemsTextBox>
      <ArrowBtn onClick={() => {setPage(page - 1)}} direction='left' />
      {visibleItems.map(({ id, mainBestReview, revImageUrl }) => {
        return <MainBestReview 
                key={id}
                mainBestReview={mainBestReview}
                revImageUrl={revImageUrl}
              />
      })}
      <ArrowBtn onClick={() => {setPage(page + 1)}} direction='right' />
    </Items>
  </div>
}

export default BestReviewList