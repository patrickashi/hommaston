import React from 'react'
import banahoma1 from "../assets/banahoma1.jpg";

import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import Footer from '../components/Footer';

const Classroomblue = () => {
  return (
    <div className='font-Montserrat bg-gray-50'>

        <div className='relative w-full h-[300px] bg-cover bg-center' style={{ backgroundImage: `url(${banahoma1})` }}>
            {/* <img src={hepburnpic}  alt="img" size={20} className='h-full w-full object-cover z-0' /> */}
            <div className='absolute py-4 2xl:mt-[240px] mobile:mt-[250px] mx-auto border-2 flex justify-center 
            xl:mt-[240px] lg:mt-[240px] md:mt-[250px] sm:mt-[250px] items-center inset-x-0 bg-neutral-50/70
            2xl:mx-20 mobile:mx-5 rounded-xl shadow-md shadow-violet-400 z-0'>

                <Link to="/Hommastonbluep"> <MdArrowBackIosNew className='mr-3 rounded-md bg-gray-100 w-10 '/> </Link>
                <h1 className='2xl:text-5xl xl:text-5xl lg:text-5xl mobile:text-2xl py-4 font-bold 2xl:text-[#0504AA]
                mobile:text-[#0504AA] text-center '>Classroom Training</h1>
                
            </div>
            <p className='text-center 2xl:pt-[323px] xl:pt-[323px] lg:pt-[323px] md:pt-[315px] sm:pt-[315px] mobile:pt-[315px] font-bold '>Select category to download brochure</p>
        </div>

        <div className='pt-20 2xl:mx-[200px] xl:mx-20 lg:mx-10 md:mx-6 sm:mx-4 mobile:mx-4 pb-10 '>

            <div className='mobile:grid 2xl:grid-cols-3 gap-4 '>
                <div className='bg-white pl-2 py-6 rounded-2xl'>Project Management </div>
                <div className='bg-white pl-2 py-6 rounded-2xl'> Quality & Auditing</div>
                <div className='bg-white pl-2 py-6 rounded-2xl'>Personal Development </div>
            </div>

            <div className='mobile:grid 2xl:grid-cols-3 my-6 gap-4'>
                <div className='bg-white pl-2 py-6 rounded-2xl'>IT</div>
                <div className='bg-white pl-2 py-6 rounded-2xl'>Business</div>
                <div className='bg-white pl-2 py-6 rounded-2xl'>Language</div>
            </div>

            <div className='mobile:grid 2xl:grid-cols-3 gap-4'>
                <div className='bg-white pl-2 py-6 rounded-2xl'>Teaching & Academics</div>
                <div className='bg-white pl-2 py-6 rounded-2xl'>Engineering & Construction</div>
                <div className='bg-white pl-2 py-6 rounded-2xl'>Sales & Marketing</div>
            </div>
        </div>


        <Footer />



    </div>
  )
}

export default Classroomblue