import React from 'react'


import electricalfacilitydesign from "../assets/electricalfacilitydesign.jpg";
import instrumentationandcontrol from "../assets/instrumentationandcontrol.jpg";
import mechanicalpiping from "../assets/mechanicalpiping.jpg";


const Secfive = () => {
  return (
    <div>
        <div className='flex justify-center flex-col items-center py-6 font-Montserrat'>
            <h1 className='text-center text-3xl mb-2'>Our most Popular <span className='text-[#0504AA]'>Courses</span></h1>
            <div className='flex py-16 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col mobile:flex-col mobile:gap-[100px] sm:gap-[100px] md:gap-0 lg:gap-0 xl:gap-0 2xl:gap-5'>
                <div className='px-4 mobile:mx-4 py-4 flex flex-col items-center shadow-md rounded-md shadow-[#ED1C24] justify-center'>
                    <div className=' w-[340px] '>
                        <img src={electricalfacilitydesign} className='h-25 w-cover justify-center rounded-md' alt="img" />
                    </div>
                    <p className='py-2 text-center'>Fundamentals of Electrical Engineering Facility Design</p>
                </div>

               <div className='px-4 py-4 mobile:mx-4 flex flex-col items-center shadow-md rounded-md shadow-[#ED1C24] justify-center'>
                    <div className=' 2xl:w-[380px] mobile:w-[330px] '>
                        <img src={instrumentationandcontrol} className='h-25 w-cover justify-center rounded-md' alt="img" />
                    </div>
                    <p className='py-2 text-center sm:mx-[68px] mobile:mx-[6px] 2xl:mx-0 xl:mx-0 lg:mx-0'>Fundamentals of Instrumentation and control Engineering Facility Design</p>
                </div>

                <div className='px-4 py-4 mobile:mx-4 flex flex-col items-center shadow-md rounded-md shadow-[#ED1C24] justify-center'>
                    <div className=' 2xl:w-[380px] xl:w-[380px] lg:w-[380px] md:w-[380px] sm:w-[380px] mobile:w-[330px] '>
                        <img src={mechanicalpiping} className='h-25 w-cover justify-center rounded-md' alt="img" />
                    </div>
                    <p className='py-2 sm:mx-[68px] mobile:mx-[6px] text-center 2xl:mx-0 xl:mx-0 lg:mx-0'>Fundamentals of Mechanical/Piping Engineering Facility Design</p>
                </div>
            </div>

            <button className='text-white bg-[#0504AA] rounded-lg px-3 my-6 py-1'>Learn More</button>

        </div>
    </div>
  )
}

export default Secfive