import React from 'react'
import { Link } from "react-router-dom";
import instrumentationandcontrol from "../assets/instrumentationandcontrol.jpg";
import Footer from '../components/Footer';

import { MdArrowBackIosNew } from "react-icons/md";

const Hommastonbluep = () => {
  return (
    <div className='font-Montserrat'>
        <div className='relative w-full h-[300px] bg-cover bg-center' style={{ backgroundImage: `url(${instrumentationandcontrol})` }}>
            {/* <img src={hepburnpic}  alt="img" size={20} className='h-full w-full object-cover z-0' /> */}
            <div className='absolute 2xl:mt-[255px] mobile:mt-[265px] mx-auto border-2 flex justify-center 
            xl:mt-[255px] lg:mt-[255px] md:mt-[265px] sm:mt-[265px] items-center inset-x-0 bg-neutral-50/70
            2xl:mx-20 mobile:mx-5 rounded-xl shadow-md shadow-violet-400'>
                <Link to="/Servicesp"> <MdArrowBackIosNew className='mr-3 rounded-md bg-gray-100 w-10 '/> </Link>
                <h1 className='2xl:text-5xl xl:text-5xl lg:text-5xl sm:text-2xl mobile:text-2xl py-4 font-bold 2xl:text-[#0504AA]
                mobile:text-[#0504AA]  text-center rounded-full'>Hommaston Blue</h1>
            </div>
        </div>
        
        <div className='mt-20 2xl:mx-20 xl:mx-20 lg:mx-20 md:mx-10 sm:mx-5 mobile:mx-4'>
            <p className='text-justify'>
                Welcome to Blue Division, where we have expanded our focus to include digital skills, blue-collar skills, 
                and non-oil and gas sectors. Our goal is to provide a comprehensive range of services that cater to the
                needs of these industries. We are committed to delivering high-quality solutions that meet the demands
                of our clients and exceed their expectations. Join us on this exciting journey as we continue to grow
                and evolve in the ever-changing landscape of the modern business world. The Blue Division serves as
                a vehicle for national support efforts. The division has chosen to brand itself as the National 
                Value Enhancement Company (NVEC).
            </p>

            <div className='my-10  flex justify-center gap-4 mobile:text-sm 2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-sm flex-wrap'>
                <Link to="/Classroomblue">
                    <button className='border-1 rounded-full py-2 px-4 shadow-md shadow-gray-300 hover:scale-105 duration-200 hover:bg-[#0504AA] hover:text-white'>Classroom Training</button>
                </Link>
                <Link to="https://skillsup.hommaston.com/#/course-library">
                    <button className='border-1 rounded-full py-2 px-4 shadow-md shadow-gray-300 hover:scale-105 duration-200 hover:bg-[#0504AA] hover:text-white'>Online Training</button>
                </Link>
                <button className='border-1 rounded-full py-2 px-4 shadow-md shadow-gray-300 hover:scale-105 duration-200 hover:bg-[#0504AA] hover:text-white'>Blended Training</button>
            </div>

        </div>

        <Footer />
    </div>
  )
}

export default Hommastonbluep