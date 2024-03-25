import React from 'react'
import { Link } from "react-router-dom";
import banahomared from "../assets/banahomared.jpg";
import Footer from '../components/Footer';

import { MdArrowBackIosNew } from "react-icons/md";

const Hommastonredp = () => {
  return (
    <div className='font-Montserrat'>
        <div className='relative w-full h-[300px] bg-cover bg-center' style={{ backgroundImage: `url(${banahomared})` }}>
            {/* <img src={hepburnpic}  alt="img" size={20} className='h-full w-full object-cover z-0' /> */}
            <div className='absolute 2xl:mt-[255px] mobile:mt-[265px] mx-auto border-2 flex justify-center 
            xl:mt-[255px] lg:mt-[255px] md:mt-[265px] sm:mt-[265px] items-center inset-x-0 bg-neutral-50/70
            2xl:mx-20 mobile:mx-5 rounded-xl shadow-md shadow-violet-400'>
                <Link to="/Servicesp"> <MdArrowBackIosNew className='mr-3 rounded-md bg-gray-100 w-10 '/> </Link>
                <h1 className='2xl:text-5xl xl:text-5xl lg:text-5xl sm:text-2xl mobile:text-2xl py-4 font-bold 2xl:text-[#ED1C24]
                mobile:text-[#ED1C24] text-center rounded-full'>Hommaston Red</h1>
            </div>
        </div>

        <div className='mt-20 2xl:mx-20 xl:mx-20 lg:mx-20 md:mx-10 sm:mx-5 mobile:mx-4'>
            <p className='text-justify'>
                Thank you for visiting our Red division page. The Red Division provides a diverse range of training programs 
                tailored for the oil and gas industry. For over a decade, we have been providing top-notch training 
                services in the Oil and Gas industry with a strong emphasis on integrity. Our pedigree is world-class,
                and we take pride in our continued progress and success.
            </p>

            <div className='mt-10 mb-20 flex justify-center gap-4 mobile:text-sm 2xl:text-xl xl:text-xl lg:text-lg md:text-md sm:text-sm flex-wrap'>
                <Link to="/Classroomredp">
                    <button className='border-1 rounded-full py-2 px-4 shadow-md shadow-gray-300 hover:scale-105 duration-200 hover:bg-[#ED1C24] hover:text-white'>Classroom Training</button>
                </Link>
                <Link to="https://skillsup.hommaston.com/#/course-library">
                    <button className='border-1 rounded-full py-2 px-4 shadow-md shadow-gray-300 hover:scale-105 duration-200 hover:bg-[#ED1C24] hover:text-white'>Online Training</button>
                </Link>
                <Link to="/Blendedtrainingp">
                    <button className='border-1 rounded-full py-2 px-4 shadow-md shadow-gray-300 hover:scale-105 duration-200 hover:bg-[#ED1C24] hover:text-white'>Blended Training</button>
                </Link>
            </div>

        </div>

        <Footer />
    </div>
  )
}

export default Hommastonredp