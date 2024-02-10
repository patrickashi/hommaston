import React from 'react'
import interiorplaces from "../assets/interiorplaces.jpg";
import Footer from '../components/Footer';

const Contactp = () => {
  return (
    <div className='h-screen font-Montserrat'>
            <div className='relative w-full h-[300px] bg-cover bg-center' style={{ backgroundImage: `url(${interiorplaces})` }}>
                {/* <img src={hepburnpic}  alt="img" size={20} className='h-full w-full object-cover z-0' /> */}
                <div className='absolute 2xl:mt-[250px] mobile:mt-[250px] mx-auto border-2 flex justify-center 
                xl:mt-[250px] lg:mt-[250px] md:mt-[250px] sm:mt-[250px] items-center inset-x-0 bg-gray-700/20
                2xl:mx-20 mobile:mx-5 rounded-[300px] shadow-md shadow-violet-400'>
                    <h1 className='2xl:text-5xl xl:text-5xl lg:text-5xl mobile:text-3xl py-4 font-bold 2xl:text-gray-700
                    mobile:text-gray-600 bg-neutral-50/70 w-full text-center rounded-full'>Get in Touch</h1>
                </div>
            </div>

            <div className='my-20 mt-20'>
              <div className='flex justify-center items-center'>
                <img src={interiorplaces} alt="img"  className='w-[400px] rounded-xl'/>
              </div>
              <p className='text-center my-4'>Contact us </p>
            </div>

            <Footer />
    </div>
  )
}

export default Contactp