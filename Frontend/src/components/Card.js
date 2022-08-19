import React, { useContext, useEffect, useState } from 'react'
import "./CSS/card.css"
import UserContext from '../context/UserContext/UserContext';


function Card(props) {
  const { isLogin} = useContext(UserContext)
  const [quantity, setQunatity] = useState(0)
  const [outOfStock, setOutOfStock] = useState(false)

  useEffect(()=>{
    if(props.productValue.stock===0){
      setOutOfStock(true)
    }
  },[])

  const incrementQuantity = () => {
    if(quantity<props.productValue.stock)
      setQunatity(prev => prev + 1)
  }
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQunatity(prev => prev - 1)
    }
  }
 

  return (
    <div className="card-view card" >
      <img src={`http://localhost:9000/user/products/${props.productValue.productName}.jpg`} className="card-image card-img-top " alt="..."></img>
      <div className="card-body">
        <h5 className="card-title productName" style={{fontFamily:"var(--oswald)"}}>{props.productValue.productName}</h5>
        <p className="card-text companyName " style={{textTransform:"capitalize"}}>{` by ${props.productValue.companyName}`}</p>
        <p className="card-text priceValue" style={{fontSize:"1.3rem"}}>{` Rs.${props.productValue.price}`}</p>
        
        {outOfStock && <p>OUT OF STOCK</p>}
        {isLogin && !outOfStock && <div className='quantity-div'>
          <button className="btn btn-light" onClick={incrementQuantity}>+</button>
          <p>{quantity}</p>
          <button className="btn btn-light" onClick={decrementQuantity}>-</button>
        </div>}
      
      </div>
    </div>
  )
}

export default Card
