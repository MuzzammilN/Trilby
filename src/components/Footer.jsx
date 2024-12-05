import React from 'react'
import IG from "../assets/instagram.png";
import FB from "../assets/facebooks.png";
import LD from "../assets/linkedin.png";

const Footer = () => {
  return (
    <div className='bottom-0 bg-gradient-to-b from-[#0F0404] to-black w-full h-40 text-white font-poppins flex flex-row justify-center items-center justify-evenly'>
    <div>
      <h1 className='text-2xl font-bold'>Get In Touch </h1>
      <p className='py-2'>Using Machine Learning To Change The World</p>
      <div className='text-sm'>&copy; Trilby Labs</div>
    </div>
        <div className='text-center'> <h1 className='text-2xl py-2 font-bold'> Socials</h1>
        <button className='w-10 px-2'><img src={IG}></img></button>
        <button className='w-10 px-2'><img src={FB}></img></button>
        <button className='w-10 px-2'><img src={LD}></img></button>
        </div>
    </div>
  )
}

export default Footer