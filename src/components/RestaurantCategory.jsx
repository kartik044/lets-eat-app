import React, { useState } from 'react'
import Itemlist from './ItemList'

const RestaurantCategory = ({data}) => {
    // console.log(data)
    const [showItems, setShowItems] = useState(false)
    const handleclick=()=>{
        setShowItems(!showItems)
    }
  return (
    <div className=''>
      <div className=' md:w-6/12 sm:w-full bg-red-50 p-4 mx-auto my-4 shadow-lg cursor-pointer  '>
        <div className='justify-between flex 'onClick={handleclick}>
        <span className='font-bold sm:text-base md:text-lg text-red-700 font-mono  cursor-pointer' >{data.title} ({data.itemCards.length})</span>
        <span>🔻</span>
        
        </div>
       { showItems && <Itemlist item={data?.itemCards}/>}
      </div>
    </div>
  )
}

export default RestaurantCategory
