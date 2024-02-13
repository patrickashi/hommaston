import React from 'react'
import mechanicalpiping from "../assets/mechanicalpiping.jpg";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import Footer from '../components/Footer';

const Classroomredp = () => {
  return (
    <div className='font-Montserrat bg-gray-50'>

         <div className='relative w-full h-[300px] bg-cover bg-center' style={{ backgroundImage: `url(${mechanicalpiping})` }}>
            {/* <img src={hepburnpic}  alt="img" size={20} className='h-full w-full object-cover z-0' /> */}
            <div className='absolute py-4 2xl:mt-[240px] mobile:mt-[250px] mx-auto border-2 flex justify-center 
            xl:mt-[240px] lg:mt-[240px] md:mt-[250px] sm:mt-[250px] items-center inset-x-0 bg-neutral-50/70
            2xl:mx-20 mobile:mx-5 rounded-xl shadow-md shadow-violet-400'>

                <Link to="/Hommastonredp"> <MdArrowBackIosNew className='mr-3 rounded-md bg-gray-100 w-10 '/> </Link>
                <h1 className='2xl:text-5xl xl:text-5xl lg:text-5xl mobile:text-2xl py-4 font-bold 2xl:text-[#ED1C24]
                mobile:text-[#ED1C24] text-center rounded-full'>Classroom Training</h1>
            </div>

            <p className='text-center 2xl:pt-[323px] xl:pt-[323px] lg:pt-[323px] md:pt-[315px] sm:pt-[315px] mobile:pt-[315px] font-bold'>Select category to download brochure</p>
         </div>

         <div className='pt-20 2xl:mx-[200px] xl:mx-20 lg:mx-10 md:mx-6 sm:mx-4 mobile:mx-4 pb-10'>

            <div className='mobile:grid 2xl:grid-cols-2 gap-4'>
              <div className='bg-white pl-2 py-6 rounded-2xl'>Fundamentals of electrical engineering facility design</div>
              <div className='bg-white pl-2 py-6 rounded-2xl'>Fundamentals of Instrumentation and control engineering facility design</div>
            </div>

            <div className='mobile:grid 2xl:grid-cols-2 gap-4 my-6'>
              <div className='bg-white pl-2 py-6 rounded-2xl'>Oil & Gas foundation series</div>
              <div className='bg-white pl-2 py-6 rounded-2xl'> Fundamentals of Structural engineering facility design</div>
            </div>

            <div className='mobile:grid 2xl:grid-cols-2 gap-4'>
              <div className='bg-white pl-2 py-6 rounded-2xl'>Fundamentals of Mechanical /piping engineering facility design</div>
              <div className='bg-white pl-2 py-6 rounded-2xl'>Fundamentals of pipeline (Surface/subsea) Engineering facility design</div>
            </div>

            <div className='mobile:grid 2xl:grid-cols-2 gap-4 my-6'>
              <div className='bg-white pl-2 py-6 rounded-2xl'>EFD</div>
              <div className='bg-white pl-2 py-6 rounded-2xl'>Piping</div>
            </div>

            <div className='mobile:grid 2xl:grid-cols-2 gap-4'>
              <div className='bg-white pl-2 py-6 rounded-2xl'>Mechanical series</div>
              <div className='bg-white pl-2 py-6 rounded-2xl'>Fundamentals of Process engineering facility design</div>
            </div>
            
         </div>

         <Footer />

    </div>
  )
}

export default Classroomredp