import React from 'react'
import domore from "../assets/domore.jpg";
import Footer from '../components/Footer';

const Ourteamp = () => {
  return (
    <div className='h-screen font-Montserrat'>
            <div className='relative w-full h-[300px] bg-cover bg-center' style={{ backgroundImage: `url(${domore})` }}>
                {/* <img src={hepburnpic}  alt="img" size={20} className='h-full w-full object-cover z-0' /> */}
                <div className='absolute 2xl:mt-[255px] mobile:mt-[260px] mx-auto border-2 flex justify-center 
                xl:mt-[255px] lg:mt-[255px] md:mt-[260px] sm:mt-[260px] items-center inset-x-0 bg-neutral-50/70 
                2xl:mx-20 mobile:mx-5 rounded-2xl shadow-md shadow-violet-400'>
                    <h1 className='2xl:text-5xl xl:text-5xl lg:text-5xl mobile:text-3xl py-4 font-bold 2xl:text-gray-700
                    mobile:text-gray-600 text-center rounded-full'>Our Team</h1>
                </div>
            </div>

            <div className='2xl:mx-[300px] xl:mx-20 lg:mx-20 md:mx-10 sm:mx-5 mobile:mx-4 pt-20'>
                <p className='2xl:text-center xl:text-center lg:text-center md:text-center sm:text-left mobile:text-left'>
                  HOMMASTON team of experienced professionals are responsible for the strategic direction and the day-to-day
                  operations of the organisation. Covering all aspects of operations, sales, product strategy, administration
                  and finance, our team works together to ensure the continued success of the organisation
                </p>
            </div>

            <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-wrap mobile:flex-col justify-center items-center gap-4 my-8'>
                <div> <img src={domore} size={20} alt="img" className='w-[400px]' /></div>
                <div> <img src={domore} alt="img" className='w-[400px]'/></div>
                <div> <img src={domore} alt="img" className='w-[400px]'/></div>
            </div>

            <Footer />
    </div>
  )
}

export default Ourteamp