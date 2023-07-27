import React, { useEffect,useState  } from 'react'

import {  useParams } from 'react-router-dom'
import { MENU_API } from './constants'

import RestaurantCategory from './RestaurantCategory'
import Shiimer from './shiimer'


function Productdetail() {
  const[menuDetails,setMenuDetails]=useState([])
   const {resId}=useParams()
   useEffect (()=>{
     Menudata()
   },[])
    
  const Menudata = async ()=>{
    try {
      const Menuinfo = await fetch(MENU_API+resId)
       const json=  await Menuinfo.json()
      //  menuDetails(json)
      //  console.log(json.data)
       setMenuDetails(json.data)
      //  console.log(json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0].info)
      //  setmenu(json.data.cards[2].groupedCard?.cardGroupMap.REGULAR.cards[6].card.itemCard)
    } catch (error) {console.error('Error fetching menu data:', error);
      
    }
       
  }
   if (menuDetails.length===0)return <Shiimer/>
  // const {name,costForTwoMessage,cuisines} = menuDetails?.cards[0]?.card?.card?.info
  // const {itemCards}= menuDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  // console.log(menuDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
 const categories= menuDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
//  console.log(categories);
 
return (
  <div className='bg-slate-50 h-[cal(100-16)] mt-10 w-full px-20 mb-24 '>
    <div className=' sm:text-xl md:text-3xl text-red-800 text-start border-b-4 border-b-red-300 inline-block flex flex-col text-ceter font-mono  font-bold '>
      {menuDetails?.cards[0]?.card?.card?.info?.name}
      <span className='text-lg text-red-500 font-mono font-bold'>{menuDetails?.cards[0]?.card?.card?.info?.city}</span>
      <span className='text-base text-red-400 font-mono font-bold'>
        {menuDetails?.cards[0]?.card?.card?.info?.cuisines.join(",")}
      </span>
      <span className='text-sm text-red-400 font-bold font-mono'>
        {menuDetails?.cards[0]?.card?.card?.info?.costForTwoMessage}
      </span>
    </div>
       {categories.map((category)=> (
         <RestaurantCategory key={category?.card?.card?.itemCards[0]?.card?.info?.id} data={category?.card?.card}/>))}
  </div>
);
    }
export default Productdetail;
