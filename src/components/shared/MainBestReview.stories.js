import MainBestReview from "./MainBestReview";

export default {
  title: "Example/MainBestReview",
  component: MainBestReview
}

const Template = args => <MainBestReview {...args} />

export const 기본_리뷰 = Template.bind({})

기본_리뷰.args = {
  revImageUrl: 'https://cdn.mustit.co.kr/review/2021/11/22/test_0_20211122100333_2630.jpeg/_dims_/resize/^250/cropcenter/250x250',
  mainBestReview: '사실 단색이라 큰 기대하지 않았는데 핑크색 택 하나가 머플러의 단조로움을 엎어버리네요... 이쁘게 잘 착용할게요!! (ps. 울 100%라 그런지 목이 간지럽긴 하네요... 해결법이 있을까요...?)'
}