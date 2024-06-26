import React from 'react'
import { Link } from "react-router-dom";
import { FaCircleDot } from "react-icons/fa6";

import seconepng2 from "../assets/seconepng2.png";


const Aboutus = () => {
  return (
    <div className='2xl:mx-28 xl:mx-28 lg:mx-[40px] mobile:ml-5 py-4 font-Montserrat border-t border-gray-300'>
        <div className='mobile:grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 py-10'>
            <div className=''>
                <p className='text-[#FF0000] font-bold text-2xl'>About Us</p>
                <p className='font-bold'>One Company, One Mission, Five Continents and One Promise.</p>
                <div className='flex gap-4 my-4 items-center'>
                    <FaCircleDot className='text-[#FF0000] w-5' size={10}/>
                    <p>World-class instructors around the globe</p>
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
                    <p>A supportive community of learners and educators, enriching learning environment.</p>
                </div>

                <Link to="aboutusp/">
                    <button className='text-white bg-[#0504AA] rounded-lg px-3 py-1 hover:scale-105 hover:opacity-80 duration-200'>Learn More</button>
                </Link>
            </div>
            <div className='flex items-center mobile:justify-center 2xl:justify-center xl:justify-center mobile:mt-20 sm:mt-0 md:mt-0
            lg:mt-0 xl:mt-0 2xl:mt-0'>
                <img src={seconepng2} size={40} alt="img" className='h-[300px]' />
            </div>
        </div>
    </div>
  )
}

export default Aboutus