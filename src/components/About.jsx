import React from 'react'
import webdesign2 from "../assets/webdesign2.jpg";

const About = () => {
  return (
    <div className='font-Montserrat'>
        <div className='relative w-full h-[300px]'>
            <img src={webdesign2}  alt="img" size={20} className='h-full w-full object-cover z-0' />
            <div className='absolute 2xl:mt-[-55px] mobile:mt-[-20px] mx-auto border-2 flex justify-center 
            xl:mt-[-55px] lg:mt-[-55px] md:mt-[-55px] sm:mt-[-20px] items-center inset-x-0 bg-neutral-50/70
            2xl:mx-20 mobile:mx-5 rounded-[300px] shadow-md shadow-violet-400 z-10'>
                <h1 className='2xl:text-6xl xl:text-6xl lg:text-6xl mobile:text-3xl py-4 font-bold text-gray-700'>About Us</h1>
            </div>
        </div>

        <div className='py-16 mt-10 2xl:mx-20 xl:mx-20 lg:mx-20 md:mx-20 sm:mx-4 mobile:mx-4'>

          <p className='2xl:text-center xl:text-center lg:text-center md:text-center sm:text-start mobile:text-start 2xl:text-xl xl:text-xl lg:text-xl md:text-lg mobile:text-sm'>
            Hommaston operates two core divisions. Red Division(Hommaston Engineering)
            focal delivery of choice skillset for design engineering, facility maintenance
            and operations support competency and performance. The blue division(Hommaston digital)
            handles human capital, Drone tech, Cloud computing, Corporate soft skills
            and all other non-engineering, certification preparatory courses.
          </p>

          <div className='my-8'>
            <h1 className='text-2xl text-center font-bold'>Training programmes</h1>
          </div>
        </div>
        
    </div>
  )
}

export default About