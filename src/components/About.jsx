import React from 'react'
import webdesign2 from "../assets/webdesign2.jpg";

const About = () => {
  return (
    <div >
        <div className='relative w-full h-[300px] font-Montserrat'>
            <img src={webdesign2}  alt="img" size={20} className='h-full w-full object-cover z-0' />
            <div className='absolute 2xl:mt-[-55px] mobile:mt-[-20px] mx-auto border-2 flex justify-center 
            xl:mt-[-55px] lg:mt-[-55px] md:mt-[-55px] sm:mt-[-20px] items-center inset-x-0 bg-gray-700/20
            2xl:mx-20 mobile:mx-5 rounded-2xl shadow-md shadow-violet-400 mx-auto z-10'>
                <h1 className='2xl:text-6xl xl:text-6xl lg:text-6xl mobile:text-3xl py-4 font-bold text-black'>About Us</h1>
            </div>
        </div>
        
    </div>
  )
}

export default About