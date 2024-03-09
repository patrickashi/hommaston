import React from 'react'
import { FaCircleDot } from "react-icons/fa6";
import trafficlight from "../assets/trafficlight.png";


const Aboutus = () => {
  return (
    <div className='2xl:mx-28 xl:mx-28 lg:mx-[40px] mobile:ml-5 py-4 font-Montserrat border-t border-gray-300'>
        <div className='mobile:grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 py-10'>
            <div className=''>
                <p className='text-[#FF0000] font-bold text-2xl'>About Us</p>
                <p className='font-bold'>One Platform, Countless Benefits</p>
                <div className='flex gap-4 my-4 items-center'>
                    <FaCircleDot className='text-[#FF0000] w-5' size={10}/>
                    <p>world-class instructors around the globe</p>
                </div>
                <div className='flex gap-4 my-4 items-center '>
                    <FaCircleDot className='text-[#FF0000] w-5' size={10}/>
                    <p>In demand online courses </p>
                </div>
                <div className='flex gap-4 my-4 items-center'>
                    <FaCircleDot className='text-[#FF0000] w-5' size={10}/>
                    <p>Personalized learning experience</p>
                </div>
                <div className='flex gap-4 my-4 items-center'>
                    <FaCircleDot className='text-[#FF0000] w-5' size={10}/>
                    <p>This succinctly captures the idea of a cooperative and nurturing educational setting.</p>
                </div>

                <button className='text-white bg-[#0504AA] rounded-lg px-3 py-1 hover:scale-105 hover:opacity-80 duration-200'>Learn More</button>
            </div>
            <div className='flex items-center mobile:justify-center 2xl:justify-center xl:justify-center'>
                <img src={trafficlight} size={40} alt="img" className='h-[300px]' />
            </div>
        </div>
    </div>
  )
}

export default Aboutus