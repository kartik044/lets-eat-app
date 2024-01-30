import React, { useEffect, useState } from 'react'

import Restaurantcard from './Restaurantcard'
import { Link } from 'react-router-dom'
import Shiimer from './shiimer'
// import { useSelector } from 'react-redux'


const Home = () => {
// const searchdata= useSelector(store=>store.cart.searchtext)
// console.log(searchdata)
     const [searchtext,setSearchText]= useState("")
    const[listofRestaurant ,setlistofRestaurant] = useState([])
    const [filterRestaurant,setFilterRestaurant]=useState([])
    
  useEffect(()=>{

    fetchData()
    } ,[])
   
    const fetchData  =  async()=>{
        const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const jsonData = await data.json()
        console.log(jsonData.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants

          )
        // console.log(jsonData?.cards?.gridElements?.infoWithStyle?.restaurants)
        // console.log(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
          setlistofRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
        // console.log({setlistofRestaurant})
            setFilterRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
      }
       
      const searchclick=()=>{
        const  filterData= listofRestaurant.filter((res)=>res.info?.name.toLowerCase().includes(searchtext.toLowerCase()))
        console.log(filterData)
        setFilterRestaurant(filterData)
      }
      const toprated=()=>{
        const topRestaurant= listofRestaurant.filter((res)=>res.info.avgRating>"4")
        setFilterRestaurant(topRestaurant)
      }
   
      // if (listofRestaurant.length===0) return <Shiimer/>
      return ( listofRestaurant.length===0 ?  (<Shiimer/>)  : 
      //  return(
      ( <div className='bg-slate-50  shadow-sm'>
          <div className='flex sm:flex  sm:shrink   ' >
        <div><input className=' bg-white rounded-md text-red-700   w-32 md:w-60 h-6 p-2 border-red-400 border-2 hover:bg-red-50 mx-2 '  value={searchtext}  onChange={(e)=>setSearchText(e.target.value)}      type="search"  placeholder ='Search here'  /></  div>
        
        <div><button  className=' bg-red-400 h-6  w-20 rounded-md text-white  border-red-300 hover:bg-red-600 mx-2 '
         onClick={searchclick}>Search</button></div>
         <button className=' md:gap-8 sm:gap-5  bg-red-400 h-6   sm:w-32  md:w-52 rounded-md text-white  border-red-300 hover:bg-red-600 mx-2   ' onClick={toprated}>Top Rated Restaurant </button>
        </div>
        <div className='flex flex-wrap gap-10 justify-center w-ful px-40 mt-10 mb-24  '>
          
          {filterRestaurant.map((restaurant) => (
            <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id} >
            
              <Restaurantcard resdata={restaurant} />
            </Link>
          ))}
        </div>
        </div>
      ))}
      
export default Home;
