import styled from "styled-components"

const Arrow = styled.div`
  position: absolute; top: 32.5%; cursor: pointer;
  ${({ direction }) => direction === "left" ? "left: 1%;" : "right: 1%;"}
`

const ArrowBtn = ({ direction = 'left' }) => {
  return <Arrow direction={direction}>
    <img src={direction === "left" ? 
      'https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/front/main/btn_mdlarrow02.png' : 
      'https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/front/main/btn_mdrarrow02.png'}
    />
  </Arrow>
}

export default ArrowBtn