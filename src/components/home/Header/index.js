import { useUserContext } from "../../contexts/user"
import { HeaderBox, HeaderList, HeaderListDot } from "./styled"

const Header = () => {
  const { user } = useUserContext()

  return <HeaderBox>
    <span style={{fontSize: "11px", color: "#fff", cursor: "pointer", position: "absolute", left: "7%", top: "2.2%"}}>
      No.1 온라인 명품 플랫폼
    </span>
    <div style={{marginRight: "2.5%"}}>
      <HeaderList>{user ? `${user.name}님` : null}</HeaderList>
      <HeaderListDot>{user ? '·' : null}</HeaderListDot>
      <span style={{fontSize: "11px", color: "#fff"}}>
        바로접속 
      </span>
      <span style={{fontSize: "10px", color: "#333", marginLeft: "10px",
        display: "inline-block", padding: "0 7px", height: "15px", borderRadius: "10px",
        backgroundColor: "#fff"
      }}>
        ON
      </span>
      <HeaderListDot>·</HeaderListDot>
      <HeaderList>{user ? '로그아웃' : '로그인'}</HeaderList>
      <HeaderListDot>·</HeaderListDot>
      <HeaderList>{user ? '마이페이지' : '회원가입'}</HeaderList>
      <HeaderListDot>{user ? null : '·'}</HeaderListDot>
      <HeaderList>{user ? null : '주문/배송조회'}</HeaderList>
      <HeaderList>서비스센터</HeaderList>
      <HeaderListDot>·</HeaderListDot>
      <HeaderList>
        판매하기
        <img 
          src="https://s3.ap-northeast-2.amazonaws.com/mustit-ux/img/front/header/btn_under_white.png" 
          style={{marginLeft: "0.15%", marginBottom: "0.15%"}}  
        />
      </HeaderList>
    </div>
  </HeaderBox>
}

export default Header