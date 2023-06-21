import PreProductItem from "./PreProductItem";

export default {
  title: "Example/PreProductItem",
  component: PreProductItem
}

const Template = args => <PreProductItem {...args} />

export const 기본_아이템 = Template.bind({})

// 넘겨줄 props 
기본_아이템.args = {
  imageUrl: 'https://cdn.mustit.co.kr/lib/upload/admin/webMdChoice/thum_230/5fbbe3da492a5edb02a8b819a7a72bb6_thumb.jpeg',
  brandName: 'Saint Laurent',
  name: '21FW 모노그램 마틀라세 카드지갑 은장',
  price: "323,800원"
}