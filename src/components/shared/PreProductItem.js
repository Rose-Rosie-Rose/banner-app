const PreProductItem = ({ imageUrl, brandName, name, price }) => {
  return <div>
    <img src={imageUrl} alt={brandName} />
    <div>{brandName}</div>
    <div>{name}</div>
    <div>{price}원</div>
  </div>
}

export default PreProductItem