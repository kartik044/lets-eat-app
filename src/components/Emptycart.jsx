import React from 'react'
import cart from "../Assets/cart.webp"

const Emptycart = () => {
  return (
    <div  className=' flex justify-center'>
      <img  className="  opacity-30  "src={cart} alt="empty cart" />
    </div>
  )
}

export default Emptycart
