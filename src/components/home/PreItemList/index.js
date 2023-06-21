import { useState, useEffect } from "react"
import PreProductItem from "../../shared/PreProductItem"

const PreItemList = () => {
  const [currentTab, setCurrentTab] = useState() // 다음주 수정필요
  const [preItems, setPreItems] = useState([])

  useEffect(() => {
    async function fetchPreItems() {
      const response = await fetch('http://localhost:8888/preitems')
      const data = await response.json()  // 실제 데이터
      
      setPreItems(data)
    }
    fetchPreItems()
  }, [])

  // 성능 개선 
  const tabs = preItems.map(({ id, tab }) => ({ id, tab }))

  const preItem = preItems.find((preItem) => {
    return preItem.id === currentTab
    
  })

  return <div>
    <ul>
      {tabs.map(({ id, tab }) => {
        return <li 
            key={id} 
            style={{ fontWeight: id === currentTab ? 'bold' : 400}} 
            onClick={() => { setCurrentTab(id) }}>
            {tab}
          </li>
      })}
    </ul>
    {preItem ? (
      <div>
        {preItem.items.map(({ brandName, name, imageUrl, id, price }) => {
          return <PreProductItem 
                  key={id}
                  brandName={brandName}
                  imageUrl={imageUrl} 
                  name={name}
                  price={price}
                />
        })}
      </div>) 
    : null}
  </div>
}

export default PreItemList