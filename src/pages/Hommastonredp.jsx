import React from 'react'
import mechanicalpiping from "../assets/mechanicalpiping.jpg";

const Hommastonredp = () => {
  return (
    <div className='font-Montserrat'>
         <div className='relative w-full h-[300px] bg-cover bg-center' style={{ backgroundImage: `url(${mechanicalpiping})` }}>
            {/* <img src={hepburnpic}  alt="img" size={20} className='h-full w-full object-cover z-0' /> */}
            <div className='absolute 2xl:mt-[250px] mobile:mt-[250px] mx-auto border-2 flex justify-center 
            xl:mt-[250px] lg:mt-[250px] md:mt-[250px] sm:mt-[250px] items-center inset-x-0 bg-gray-700/20
            2xl:mx-20 mobile:mx-5 rounded-[300px] shadow-md shadow-violet-400'>
                <h1 className='2xl:text-5xl xl:text-5xl lg:text-5xl mobile:text-3xl py-4 font-bold 2xl:text-[#ED1C24]
                mobile:text-[#ED1C24] bg-neutral-50/70 w-full text-center rounded-full'>Hommaston Red</h1>
            </div>
        </div>
        <div className='mt-20 2xl:mx-20 xl:mx-20 lg:mx-20 md:mx-10 sm:mx-5 mobile:mx-4'>
            <p>
                Thank you for visiting our Red division page. The Red Division provides a diverse range of training programs 
                tailored for the oil and gas industry. For over a decade, we have been providing top-notch training 
                services in the Oil and Gas industry with a strong emphasis on integrity. Our pedigree is world-class,
                and we take pride in our continued progress and success.
            </p>
        </div>
    </div>
  )
}

export default Hommastonredp