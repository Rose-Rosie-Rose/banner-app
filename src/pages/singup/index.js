import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { InputJoin, JoinBox, JoinBtn, JoinLabel, JoinLabelTitle, JoinLableDescription } from "./styled"

const SingupPage = () => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    address: ''
  })
  const handleUpdate = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async () => {
    const response = await fetch('http://localhost:8888/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({formValues})
    })

    if (response.ok){
      navigate('/signin')
    }
  }

  return <div style={{width: "1344px", height: "1161.2px", padding: "50px 0"}}>
    <div style={{width: 480, height: 550.8, margin: "0 auto"}}>
      <form>
        <h1>회원정보 입력 및 동의</h1>
        <JoinBox>
          <JoinLabel>
            <JoinLabelTitle>아이디</JoinLabelTitle>
            <JoinLableDescription>영문 또는 영문+숫자 조합 4~12자</JoinLableDescription>
          </JoinLabel>
          <InputJoin type="text" name="email" value={formValues.email} onChange={handleUpdate} />
        </JoinBox>
        <JoinBox>
          <JoinLabel>
            <JoinLabelTitle>비밀번호</JoinLabelTitle>
            <JoinLableDescription>영문 대.소문자+숫자+특수문자 조합 8~15자</JoinLableDescription>
          </JoinLabel>
          <InputJoin type="password" name="password" value={formValues.password} onChange={handleUpdate} />
        </JoinBox>
        <JoinBox>
          <JoinLabel>
            <JoinLabelTitle>비밀번호 확인</JoinLabelTitle>
            <JoinLableDescription>비밀번호 재입력</JoinLableDescription>
          </JoinLabel>
          <InputJoin type="password" name="passwordConfirm" value={formValues.passwordConfirm} onChange={handleUpdate} />
        </JoinBox>
        <JoinBox>
          <JoinLabel>
            <JoinLabelTitle>이름</JoinLabelTitle>
            <JoinLableDescription>실명 입력</JoinLableDescription>
          </JoinLabel>
          <InputJoin type="text" name="name" value={formValues.name} onChange={handleUpdate} />
        </JoinBox>
        <JoinBox>
          <JoinLabel>
          <JoinLabelTitle>주소</JoinLabelTitle>
          </JoinLabel>
          <InputJoin type="text" name="address" value={formValues.address} onChange={handleUpdate}/>
        </JoinBox>
      </form>
      <JoinBtn onClick={handleSubmit}>가입하기</JoinBtn>
    </div>
  </div>
}

export default SingupPage