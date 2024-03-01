import React from 'react'

import hommastonlogo from "../assets/hommastonlogo.png";
import { PiDropboxLogoDuotone } from "react-icons/pi";

import hero1 from "../assets/hero1.png";

import nysclogo from "../assets/nysclogo.png";
import lng from "../assets/lng.png";
import deltaafflick from "../assets/deltaafflick.png";
import eit from "../assets/eit.png";
import oando from "../assets/oando.png";
import koeing from "../assets/koenig.png";

import Changeimg from './Changeimg';
import Changeparagraph from './Changeparagraph';
import Logoslider from './Logoslider';



const Secone = () => {
  return (
    <div className='w-full py-[30px] border-b border-gray-200 font-Montserrat'>
        <div className=' mobile:grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 mx-[40px] mobile:mx-0'>
            <div className='2xl:mx-[100px] 2xl:w-full xl:mx-[100px] lg:mx-[40px] mobile:ml-4 2xl:py-4 xl:py-4 lg:py-4 md:py-4 sm:py-4
            mobile:mb-10 sm:mb-10 md:mb-10'>

                <p className='2xl:text-[50px] 2xl:py-4 mobile:my-8 2xl:my-0 xl:my-0 lg:my-0 md:my-8 mobile:text-[40px] font-bold '>Up Your <span className='text-[#0504AA]'> Skills </span> 
                to <span className='text-[#0504AA]'>advance</span> your <span className='text-[#0504AA]'>career </span>path
                </p>
                

                {/* <p className='my-5 text-xl font-bold'>Share your Experience through Hommaston</p> */}
                <Changeparagraph />

                <button className='bg-[#ED1C24] text-white font-bold rounded-2xl px-4 py-3 my-5 hover:scale-110 duration-300'>Explore Courses</button>

                <div className='flex mt-10 gap-[-4px]'>
                  <div>
                      <img src={hero1} size={20} className='w-40' alt="img" />
                  </div>

                  <div className='flex items-center ml-1 text-gray-600'>
                    Experts Worldwide
                  </div>
                </div>
            </div>
            

            <Changeimg />
        </div>

        {/* logos */}
        <div className=' flex 2xl:flex-row xl:flex-row lg:flex-row mobile:flex-col 2xl:mx-28 xl:mx-28 lg:mx-20 mobile:mx-0 py-14 px-6 border-2 rounded-lg gap-8'>
          <div className='flex items-center'>
            <p className='font-bold text-2xl text-center xl:text-start lg:text-start mobile:text-center'>Worldwide Network Of Trusted Partners and Clients</p>
          </div>

          {/* <div className='flex justify-between 2xl:gap-5 xl:gap-2 lg:gap-8 md:gap-2 sm:gap-8 mobile:gap-8 flex-wrap'>
            <div> <img src={nysclogo} size={20} alt="logo" className='w-10 '/></div>
            <div> <img src={lng} alt="logo" size={20} className='w-20'/></div>
            <div className='flex items-center'><img src={deltaafflick} size={20} alt="logo" className='w-28 flex items-center'/></div>
            <div className='flex items-center'> <img src={eit} alt="logo" size={20} className='w-20'/></div>
            <div className='flex items-center'> <img src={oando} size={20} alt="logo" className='w-20 '/></div>
            <div className='flex items-center'> <img src={koeing} size={20} alt="logo" className='w-20 '/></div>
          </div> */}

          <Logoslider />

        </div>


    </div>
  )
}

export default Secone