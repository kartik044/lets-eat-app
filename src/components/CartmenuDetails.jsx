import React from 'react'
import { CDN_URL } from './constants'
// import {IoBagAdd,IoBagRemove} from "react-icons/io5"
import {AiFillDelete} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { Subtotal, removeItem } from '../utils/Cartslice'
import { toast } from 'react-hot-toast'
// import { useSelector } from 'react-redux'


const CartMenuDetails = ({imageId,name,price,defaultPrice,id}) => {
    // const Items = useSelector(store=>store.cart.cartItems)
    //  console.log(cartItem)
    // const {imageId,name,defaultPrice,id,price} =cartItem
    const totalprice= useSelector(store=>store.cart.Totalprice) 
    const dispatch=useDispatch()
    const deletehandle=(id)=>{
        dispatch(removeItem(id))
        dispatch(Subtotal())
        toast.success("Remove item Sucessfully")
    }
  return (
          <>
        <div>
    <div className='bg-slate-50 h-[cal(100-16)] mt-5 w-full  text-center '>
      
      <div className="   ">
        <div className='   justify-between   flex flex-row w-8/12   ml-8 bg-red-50  place-items-center text-red-700 font-mono sm:gap-3'>
              
          
            <div>
              <img className='w-14 h-14 my-2' src={CDN_URL+imageId} alt="img" />
            </div>
            <div className=' sm:text-base md:text-2xl inline-block md:w-96 sm:w-72  truncate'>{name}</div>
            <div className='flex md:gap-4 sm:gap-2'>
              {/* <button className='text-2xl hover:text-red-500'> <IoBagAdd /></button> */}
              {/* <div className='text-2xl'>1</div> */}
              {/* <button className='text-2xl hover:text-red-500'> <IoBagRemove /></button> */}
            </div>
            <span className='md:text-xl sm:text-base font-mono'>
            ₹ : {price/100 ? price/100 : defaultPrice/100}
            </span>
            <div className='flex place-items-center sm:text-base md:text-2xl text-red-700 hover:text-red-300 cursor-pointer' onClick={()=>{deletehandle(id)}}>
              <AiFillDelete />
            </div>
          </div>
        
        <div className=' mt-4  w-52 flex flex-col   right-4 fixed bottom-20 mb-4 shadow-red-300 shadow-2xl font-bold font-mono  '> Total Price= {totalprice}
          <button className=' w-52 h-8  text-white font-bold font-sans bg-red-400  hover:bg-red-600 '> Check Out </button> 
       </div> 
        
      </div>
    </div>
</div>
    
        
      
    
    </>  )
  }

export default CartMenuDetails
