import { createContext, useState, useContext } from 'react'

const Context = createContext()

/*
Provider 안에 속한 컴호넌트들에게 데이터를 제공한다.
*/
/*
children = 내부에 감싸져있는 요소
ex)
<div>
  <ProItemList />
  <Review />
</div>
*/
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({"id": 0, "email": "rosie0940@daum.net", "password": "1234", "name": "홍길동"})

  return <Context.Provider value={{ user, setUser }}>
    {children}
  </Context.Provider>
}

export const useUserContext = () => {
  return useContext(Context)
}