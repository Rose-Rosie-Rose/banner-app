import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignInPage = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  }) 
  const handleUpdate = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async() => {
    // 전체 유저를 다 가져온다.
    const response = await fetch('http://localhost:8888/users')
    const users = await response.json()
    
    // 전체 유저중에 입력된 이메일을 가진 유저가 있는지 찾는다.
    const user = users.find(user => {
      return user.email === formValues.email
    })
    if (!user) {
      alert('일치하는 유저가 없습니다.')
      return
    }
    if (user.password !== formValues.password){
      alert('비밀번호가 일치하지 않습니다.')
      return
    }
    alert('로그인 성공')
  }

  return <div>
    <h1>로그인</h1>
    <input name="email" placeholder="이메일을 입력해주세요" value={formValues.email} onChange={handleUpdate} />
    <input name="password" placeholder="비밀번호를 입력해주세요" value={formValues.password} onChange={handleUpdate} />
    <button onClick={handleSubmit}>로그인</button>
  </div>
}

export default SignInPage