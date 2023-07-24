import React from 'react'
import Emptycart from './Emptycart'



import { useSelector } from 'react-redux'
// import store from '../Utils/Store'

import CartMenuDetails from './CartmenuDetails'
   

const Cart = () => {
  const cartItem = useSelector(store=>store.cart.cartItems)
  // console.log(cartItem);
   
  return (   cartItem.length===0 ? <Emptycart/> : (
    <div>
    <span className='text-center text-2xl text-red-700 font-mono font-bold mb-24'> Total-Items :{cartItem.length}</span>
    <div className='border-t-4   w-4/5 mx-4 border-red-300 mt-4'></div>
    {cartItem.map(item =><CartMenuDetails key={item.id} {...item} />
              )}
    </div>)
  )
}

export default Cart
