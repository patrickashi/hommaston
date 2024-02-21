// import { Send } from '@material-ui/icons'
import React from 'react'
import { Link } from "react-router-dom";
import blackgradient from "../assets/blackgradient.jpg";

const Newsletter = () => {
  return (
    <div className='flex justify-center items-center w-[100%] flex-col text-white py-16 bg-cover bg-center font-Montserrat'
    style={{ backgroundImage:  `url(${blackgradient})` }}>
        <h1 className='2xl:text-4xl mobile:text-3xl text-center font-bold'>Join Our Learning Community</h1>
        <h2 className='text-xl mt-2 mobile:p-3 mobile:text-center 2xl:w-[1000px]'>Stay Connected with fellow learners and Instructors by subscribing to our newsletter. 
            Get the latest update and be a part of our growing community</h2>

        <div className='flex mt-[3rem] items-center justify-between 2xl:w-[40rem] xl:w-[40rem] lg:w-[40rem] h-14 bg-white rounded-2xl border-[#cccccc]
         overflow-hidden mobile:w-[23rem]'>
            <input type="email" placeholder='Enter your email address here' className='flex-[7] pl-[10px] text-black  border-none outline-none'/>
            <button className='bg-[#FF0000] flex-1 h-full'>
                {/* <Send className='text-white'/> */}
                <p className='text-white px-4'>Subscribe</p>
            </button>
        </div>
    </div>
  )
}

export default Newsletter