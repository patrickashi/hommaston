import React from 'react'
import sponge from "../assets/sponge.gif";
import hommastonlogo from "../assets/hommastonlogo.png";
import { PiDropboxLogoDuotone } from "react-icons/pi";
import manwhite from "../assets/manwhite.png";

import iso1 from "../assets/iso1.png";
import iso9 from "../assets/iso9.png";
import LPI from "../assets/LPI.png";
import acdt from "../assets/acdt2.png";
import CPD from "../assets/CPD.png";


const Secone = () => {
  return (
    <div className='w-full py-[30px] border-b border-gray-200 font-Montserrat'>
        <div className='mobile:grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 mx-[40px] mobile:mx-0'>
            <div className='2xl:mx-[100px] mobile:ml-4 2xl:py-4 xl:py-4 lg:py-4 md:py-4 sm:py-4'>

                <p className='2xl:text-[50px] 2xl:py-4 mobile:my-8 2xl:my-0 xl:my-0 lg:my-0 md:my-8 mobile:text-[40px] font-bold '>Up Your <span className='text-[#0504AA]'> Skills </span> 
                to <span className='text-[#0504AA]'>advance</span> your <span className='text-[#0504AA]'>career </span>path
                </p>
                

                <p className='my-5 text-xl font-bold'>Share your Experience through Hommaston</p>

                <button className='bg-[#ED1C24] text-white font-bold rounded-2xl px-4 py-3 my-5'>Explore Courses</button>

                <div className='flex mt-10 gap-[-4px]'>
                  <div className='bg-[#ED1C24] rounded-full py-2 px-5 '></div>
                  <div className='bg-[#ED1C24] rounded-full py-2 px-5 pl-[-2px]'></div>
                  <div className='bg-[#ED1C24] rounded-full py-2 px-5'></div>
                  <div className='bg-[#ED1C24] rounded-full py-2 px-[6px] text-white'>+20 </div> <span className='flex items-center ml-2 text-[#808080]'>Experts Worldwide</span>
                </div>
            </div>
            <div className='flex items-center mobile:justify-center 2xl:justify-start xl:justify-start'>
              <img src={manwhite} alt="img" className='w-80' />
            </div>
        </div>

        {/* logos */}
        <div className='flex 2xl:flex-row xl:flex-row lg:flex-row mobile:flex-col 2xl:mx-20 xl:mx-20 lg:mx-20 mobile:mx-4 py-14 px-6 border-2 rounded-lg gap-8'>
          <div>
            <p className='font-bold text-2xl'>Worldwide network of Trusted Partners and clients</p>
          </div>
          <div className='flex justify-between 2xl:gap-20 xl:gap-20 lg:gap-8 mobile:gap-8 flex-wrap'>

            <div> <img src={iso1} size={20} alt="logo" className='w-20 '/></div>
            <div> <img src={iso1} alt="logo" size={20} className='w-20'/></div>
            <div><img src={iso1} size={20} alt="logo" className='w-20'/></div>
            <div> <img src={iso1} alt="logo" size={20} className='w-20'/></div>
            
            
            {/* <div> <img src={} alt="logo" /></div> */}
           
          </div>
        </div>


    </div>
  )
}

export default Secone