import React from 'react'
import { CDN_URL } from './constants';
import { useDispatch } from 'react-redux';
import{Subtotal, addItem} from "../utils/Cartslice"
import {  toast } from 'react-hot-toast';
const Itemlist = ({item}) => {
    // console.log(item);
 const dispatch=useDispatch()
     const handleadd=(item)=>{
        dispatch(addItem(item.card.info))
        dispatch(Subtotal())
        toast.success("Added to cart")
     }
  return (
    <div className='sm:flex sm:flex-col md:flex-none'>
     {item.map((item)=>(
<div className="p-2 m-2 border-b-2 border-red-300 text-red-600 font-mono text-left flex "
        key={item?.card?.info?.id} >
          
            
    <div className='p-2 md:w-9/12 sm-w-full sm:flex-col'>
        <div>
            <span className=' font-bold ' >{item?.card?.info?.name}</span>
            <span className=' font-bold '> -₹{item?.card?.info?.price ?  item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100 }  </span>
        </div>
        <p className='text-xs '>{item?.card?.info?.description}</p>
    </div>
        <div className='w-3/12 sm:flex sm:flex-col'> 
        <div className='absolute'>
        <button className=' p-2 mx-14 bg-red-300 text-white shadow-lg rounded-lg text-xs ' onClick={()=>{handleadd(item)}}>Add +</button>
        </div>
        
        <img src={CDN_URL+item?.card?.info?.imageId} alt=""  className='w-full p-4'/>  
        </div>
</div>
        
         ))}
    </div>
  )
}

export default Itemlist
