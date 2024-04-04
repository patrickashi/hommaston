import React from 'react'
import { Link } from "react-router-dom";

import hommastonlogo from "../assets/hommastonlogo.png";
import { PiDropboxLogoDuotone } from "react-icons/pi";

import hero1 from "../assets/hero1.png";



import Changeimg from './Changeimg';
import Changeparagraph from './Changeparagraph';
import Logoslider from './Logoslider';



const Secone = () => {
  return (
    <div className='w-full py-[30px]   font-Montserrat'>
        <div className=' mobile:grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 2xl:mx-[100px]
        xl:mx-[100px] lg:mx-[100px]  mobile:mx-0'>
            <div className=' 2xl:w-full xl:mx-[100px] lg:mx-[40px] mobile:ml-4 2xl:py-4 xl:py-4 lg:py-4 md:py-4 sm:py-4
            mobile:mb-10 sm:mb-10 md:mb-10 '>

                <p className='2xl:text-[50px] 2xl:py-4 mobile:my-8 2xl:my-0 xl:my-0 lg:my-0 md:my-8 mobile:text-[40px] font-bold '>Occupational<span className='text-[#0504AA]'> Performance </span> 
                Starts at <span className='text-[#ED1C24]'></span><span className='text-[#0504AA]'>Hommaston</span>
                </p>
                

                {/* <p className='my-5 text-xl font-bold'>Share your Experience through Hommaston</p> */}
                <Changeparagraph />

                <Link to="https://skillsup.hommaston.com/#/course-library">
                  <button className='bg-[#ED1C24] text-white font-bold rounded-2xl px-4 py-3 my-5 hover:scale-105 duration-300'>Explore Courses</button>
                </Link>

                <div className='flex mt-10 gap-[-4px]'>
                  <div className=''>
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
        <div className=' flex 2xl:flex-row xl:flex-row lg:flex-row mobile:flex-col 2xl:mx-28 xl:mx-28 lg:mx-20 mobile:mx-0 py-14 px-6 border rounded-lg gap-8 shadow-md shadow-gray-100
        mobile:mt-10 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0'>
          <div className='flex items-center'>
            <p className='font-bold text-2xl text-center xl:text-start lg:text-start mobile:text-center'>Worldwide Network Of Trusted Partners and Clients..</p>
          </div>

          <Logoslider />

        </div>


    </div>
  )
}

export default Secone