import React from 'react'
import instrumentationandcontrol from "../assets/instrumentationandcontrol.jpg";

const Hommastonbluep = () => {
  return (
    <div className='font-Montserrat'>
        <div className='relative w-full h-[300px] bg-cover bg-center' style={{ backgroundImage: `url(${instrumentationandcontrol})` }}>
            {/* <img src={hepburnpic}  alt="img" size={20} className='h-full w-full object-cover z-0' /> */}
            <div className='absolute 2xl:mt-[250px] mobile:mt-[250px] mx-auto border-2 flex justify-center 
            xl:mt-[250px] lg:mt-[250px] md:mt-[250px] sm:mt-[250px] items-center inset-x-0 bg-gray-700/20
            2xl:mx-20 mobile:mx-5 rounded-[300px] shadow-md shadow-violet-400'>
                <h1 className='2xl:text-5xl xl:text-5xl lg:text-5xl mobile:text-3xl py-4 font-bold 2xl:text-[#0504AA]
                mobile:text-[#0504AA] bg-neutral-50/70 w-full text-center rounded-full'>Hommaston Blue</h1>
            </div>
        </div>
        
        <div className='mt-20 2xl:mx-20 xl:mx-20 lg:mx-20 md:mx-10 sm:mx-5 mobile:mx-4'>
            <p>
                Welcome to Blue Division, where we have expanded our focus to include digital skills, blue-collar skills, 
                and non-oil and gas sectors. Our goal is to provide a comprehensive range of services that cater to the
                needs of these industries. We are committed to delivering high-quality solutions that meet the demands
                of our clients and exceed their expectations. Join us on this exciting journey as we continue to grow
                and evolve in the ever-changing landscape of the modern business world. The Blue Division serves as
                a vehicle for national support efforts. The division has chosen to brand itself as the National 
                Value Enhancement Company (NVEC).
            </p>
        </div>
    </div>
  )
}

export default Hommastonbluep