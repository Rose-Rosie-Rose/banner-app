import RecommendationProductItem from "./RecommendationProductItem";

export default {
  title: "Example/ReccommendationProductItem",
  component: RecommendationProductItem
}

const Template = args => <RecommendationProductItem {...args} />

export const 추천_상품 = Template.bind({})

추천_상품.arg = {
  imageUrl: 'https://cdn.mustit.co.kr/lib/upload/admin/webMdChoice/thum_230/5fbbe3da492a5edb02a8b819a7a72bb6_thumb.jpeg',
  brandName: 'Saint Laurent',
  name: '21FW 모노그램 마틀라세 카드지갑 은장',
  price: "323,800원"
}