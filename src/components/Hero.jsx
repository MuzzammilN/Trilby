import React from 'react'
import { ReactTyped } from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
    <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
        <h1 className='font-bold font-poppins text-4xl'>
        Empowering the Future With <span className='text-[#e14d41]'>Machine Learning</span> Research
        </h1>

    <div className='font-bold text-xl mt-5 font-poppins flex flex-row space-x-2 justify-center '>
        <p> Driving progress through</p>
        <ReactTyped strings={['intelligent systems']} typeSpeed={140} backSpeed={200}/>
    </div>
        <div className='font-bold text-xl mt-5 font-poppins flex flex-row bewtten justify-center space-x-8 p-4'>
        <button className="py-2 px-6 font-bold rounded-full text-sm bg-[#e14d41] hover:bg-[#95362f] transition-all duration-500 ease-in-out">
            Get Started
        </button>

            <button className="border-2 py-2 px-6 font-bold rounded-full text-sm hover:bg-[#95362f] transition-all duration-600 ease-in-out">
            Learn More
            </button>

        </div>
    </div>

    </div>
  )
}

export default Hero