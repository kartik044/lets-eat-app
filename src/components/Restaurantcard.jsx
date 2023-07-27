import React from 'react'

import {CDN_URL} from "./constants" 

const Restaurantcard = (props ) => {
  const {name,cloudinaryImageId} = props.resdata.info
  return (
   <>
   <div className=' font-mono flex flex-col   w-52 h-80 bg-pink-50 shadow-md shadow-slate-400     translate-x-1 hover:shadow-xl hover:shadow-red-200 cursor-pointer  rounded-2xl    hover:duration-700 hover:-translate-y-2  ' >
     <div  className="   h-44  " >
      <img className='w-full h-full  overflow-hidden bg-cover rounded-lg ' src={CDN_URL+cloudinaryImageId} alt="img" />
     </div >
     <div className='my-1 flex flex-col ' >
      <div className='font-bold text-red-700 m-1 text-xl  overflow-hidden truncate' >{name}</div>
       
      <div className='mx-1 '>
      <div className='text-red-600 truncate text-lg '>{props?.resdata?.info?.cuisines.join(",")}</div>
      <div className='text-red-400   font-bold font-mono text-sm mb-1 truncate'>Locality:{props?.resdata?.info?.locality}</div>
      <div className='flex flex-row my-1 justify-between '>
      <span className='text-red-400 text-sm  '>{props?.resdata?.info?.avgRating} </span>
      <span className='text-red-400 text-sm  '>{props?.resdata?.info?.costForTwo}  </span>
      </div>
      
      </div>
      
      

     </div>
     </div>
     
      </> 
  )
}

export default Restaurantcard
