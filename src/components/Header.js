import  logo from "../Assets/logo.jpg" 

import {AiOutlineShoppingCart} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import { Link } from 'react-router-dom'
import {  useSelector } from 'react-redux'





const Header = () => {

 const cartItems = useSelector(store=>store.cart.cartItems)






  return (
    // main Header
    <div className=  " bg-red-50 w-full h-20 flex space-x-2  justify-between align-middle  shadow-red-300 shadow-md transition-all mb-5 static"  >
        <Link to= "/" >
        <div> <img className='h-20 w-20 ml-2 p-1' src={logo} alt="" />
        </div> </Link>
        
        <div className='flex space-x-4 cursor-pointer text-3xl  my-auto pr-4  '>
          
           <Link to ="/whishlist"><button  className='text-red-600  hover:text-red-300'  ><AiOutlineHeart/></button> </Link> 
            <Link to ="/Cart"><button className='text-red-600 hover:text-red-300'><AiOutlineShoppingCart/>
            <div className='flex-row text-sm '>{cartItems.length}</div>
            </button> </Link>
            <Link to ="/profile"><button className='text-red-600 hover:text-red-300'><CgProfile/></button> </Link>
            
        </div>
      
    </div>
  )
}

export default Header
