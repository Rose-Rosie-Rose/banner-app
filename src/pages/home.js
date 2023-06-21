import BestReviewList from "../components/home/BestReviewList"
import Header from "../components/home/Header"
import PreItemList from "../components/home/PreItemList"
import RecommendationProduct from "../components/home/RecommendationProduct"

const HomePage = () => {
  return <div>
    <Header />
    <PreItemList />
    <BestReviewList />
    <RecommendationProduct />
  </div>
}

export default HomePage