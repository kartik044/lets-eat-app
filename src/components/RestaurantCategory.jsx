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
      <div className='w-6/12 bg-red-50 p-4 mx-auto my-4 shadow-lg cursor-pointer  '>
        <div className='justify-between flex 'onClick={handleclick}>
        <span className='font-bold text-lg text-red-700 font-mono  cursor-pointer' >{data.title} ({data.itemCards.length})</span>
        <span>🔻</span>
        
        </div>
       { showItems && <Itemlist item={data?.itemCards}/>}
      </div>
    </div>
  )
}

export default RestaurantCategory
