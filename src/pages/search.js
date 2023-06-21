import { useState, useEffect, useMemo } from "react"

const type정의값들 = ['전체', '업데이트순', '최신등록순', '낮은가격순', '높은가격순']

const SearchPage = () => {
  const [현재타입, 현재타입변경] = useState('전체')
  const [상품목록, 상품목록변경] = useState([])

  console.log(상품목록)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:8888/products')
      
      if(response.ok){
        상품목록변경(await response.json())
      }
    }
    fetchProducts()
  }, [])

  const 필터링된상품목록 = useMemo(() => {
    switch (현재타입) {
      case type정의값들[0]: {
        return 상품목록
      }
      case type정의값들[1]: {
        [...상품목록].sort((a, b) => {
          return new Date(b.insertDateTime).getTime - new Date(a.insertDateTime).getTime
        })
      }
      case type정의값들[2]: {
        [...상품목록].sort((a, b) => {
          return b.itemNo - a.itemNo
        })
      }
      case type정의값들[3]: {
        return 상품목록
      }
      case type정의값들[4]: {
        return 상품목록
      }
      default: {
        return 상품목록
      }
    }
  }, [현재타입, 상품목록])

  console.log('필터링된상품목록', 필터링된상품목록)

  return <div>
    <ul>
      {type정의값들.map((타입) => {
        return <li key={타입} 
          style={{fontWeight: 현재타입 === 타입 ? 'bold' : '400'}}
          onClick={() => {현재타입변경(타입)}}
          >{타입}</li>
      })}
    </ul>
  </div>
}

export default SearchPage