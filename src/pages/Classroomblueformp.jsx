import React from 'react'
import banahoma1 from "../assets/banahoma1.jpg";
import { MdArrowBackIosNew } from "react-icons/md";
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import Blueform from '../components/BlueForm';

const Classroomblueformp = () => {
  return (
    <div className='font-Montserrat'>

        <div className='relative w-full h-[300px] bg-cover bg-center' style={{ backgroundImage: `url(${banahoma1})` }}>
            {/* <img src={hepburnpic}  alt="img" size={20} className='h-full w-full object-cover z-0' /> */}
            <div className='absolute 2xl:mt-[255px] mobile:mt-[265px] mx-auto border-2 flex justify-center 
            xl:mt-[255px] lg:mt-[255px] md:mt-[265px] sm:mt-[265px] items-center inset-x-0 bg-neutral-50/70
            2xl:mx-20 mobile:mx-5 rounded-xl shadow-md shadow-violet-400'>
                <Link to="/Classroomblue"> <MdArrowBackIosNew className='mr-3 rounded-md bg-gray-100 w-10 '/> </Link>
                <h1 className='2xl:text-5xl xl:text-5xl lg:text-5xl sm:text-2xl mobile:text-2xl py-4 font-bold 2xl:text-[#0504AA]
                mobile:text-[#0504AA]  text-center rounded-full'>Hommaston Blue</h1>
            </div>
        </div>

        <div className='pt-20'></div>

        <Blueform />


        <Footer />
    </div>
  )
}

export default Classroomblueformp