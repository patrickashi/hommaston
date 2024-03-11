import React from 'react'

import { Link } from "react-router-dom";

import fcdesign1 from "../assets/fcdesign1.jpg";
import fcdesign from "../assets/fcdesign.jpg";
import piping1 from "../assets/piping1.jpg";


const Secfive = () => {
  return (
    <div>
        <div className='flex justify-center flex-col items-center py-6 font-Montserrat'>
            <h1 className='text-center text-3xl mb-2'>Our most Popular <span className='text-[#0504AA]'>Courses</span></h1>
            <div className='flex py-16 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col mobile:flex-col mobile:gap-[100px] sm:gap-[100px] md:gap-20 lg:gap-0 xl:gap-0 2xl:gap-5'>

                <Link to="https://skillsup.hommaston.com/#/course-detail/Negotiation%20Skill/aTE5TUtHbXprZm5hVGN3TnpENnMvQT09">
                    <div className='px-4 mobile:mx-4 py-4 2xl:w-[380px] mobile:w-[340px] flex flex-col items-center shadow-md rounded-md shadow-[#ED1C24] hover:shadow-gray-400 duration-200 hover:scale-105 justify-center'>
                        <div className=' 2xl:w-[380px] mobile:w-[300px] flex justify-center'>
                            <img src={fcdesign1} className='h-25 w-cover justify-center rounded-md 2xl:w-[300px] mobile:w-[300px]' alt="img" />
                        </div>
                        <p className='py-2 text-center 2xl:w-[300px] mobile:w-[300px]'>Fundamentals of Electrical Engineering Facility Design</p>
                    </div>
                </Link>

                <Link to="https://skillsup.hommaston.com/#/course-detail/Businessethics/NldKQmwyVTBGZzZYcTV1ZmJubUV3UT09">
                    <div className='px-4 py-4 mobile:mx-4 2xl:w-[380px] mobile:w-[340px] flex flex-col items-center shadow-md rounded-md shadow-[#ED1C24] hover:shadow-gray-400 duration-200 hover:scale-105 mobile:justify-center'>
                        <div className=' 2xl:w-[380px] mobile:w-[300px] flex justify-center '>
                            <img src={fcdesign} className='h-25 w-cover justify-center rounded-md 2xl:w-[300px] mobile:w-[300px]' alt="img" />
                        </div>
                        <p className='py-2 text-center sm:mx-[68px] mobile:mx-[6px] 2xl:mx-0 xl:mx-0 lg:mx-0 mobile:text-sm 2xl:w-[300px] mobile:w-[300px]'>Fundamentals of Instrumentation and control Engineering Facility Design</p>
                    </div>
                </Link>

                <Link to="https://skillsup.hommaston.com/#/course-detail/Mechanical%20Engineering%20Facility%20design/bHBDUDcrSStsT3VRbC85aU4zZDhLZz09">
                    <div className='px-4 py-4 mobile:mx-4 2xl:w-[380px] mobile:w-[340px] flex flex-col items-center shadow-md rounded-md shadow-[#ED1C24] hover:shadow-gray-400 duration-200 hover:scale-105 justify-center'>
                        <div className=' 2xl:w-[380px] mobile:w-[300px] flex justify-center'>
                            <img src={piping1} className='h-25 w-cover justify-center rounded-md 2xl:w-[300px] mobile:w-[300px]' alt="img" />
                        </div>
                        <p className='py-2 sm:mx-[68px] mobile:mx-[6px] text-center 2xl:mx-0 xl:mx-0 lg:mx-0 2xl:w-[300px] mobile:w-[300px]'>Fundamentals of Mechanical/Piping Engineering Facility Design</p>
                    </div>
                </Link>
            </div>

            <button className='text-white bg-[#0504AA] rounded-lg px-3 my-6 py-1 hover:scale-105 hover:opacity-80 duration-200'>Learn More</button>

        </div>
    </div>
  )
}

export default Secfive