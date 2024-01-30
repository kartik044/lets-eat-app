import React from 'react'
import {BsFacebook,BsTwitter} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"

const footer = () => {
  return (
    <div>
       <div className='w-full h-20  bg-black opacity-95  flex place-items-center justify-between px-6 text-white bottom-0 fixed font-mono  '>
        
        <div className='flex flex-col   font-bold'>
            <span>About us </span>
            <span>contact us </span>
            <span>services</span>
        </div>
        <div className=' text-3xl font-extralight'>Let's Eat</div>
        <div  className='flex flex-row gap-2 text-2xl'>
            <a href="www.twitter.com"> <BsTwitter/></a>
            <a href="www.instagram.com"><AiFillInstagram/></a>
            <a href="www.facebook.com"><BsFacebook/></a>
        </div>
        </div>
    </div>
  )
}

export default footer

