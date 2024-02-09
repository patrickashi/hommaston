import React from 'react'
import hommastonlogo from "../assets/hommastonlogo.png";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";

const Footer = () => {
  return (
    <div className='bg-black py-8 text-white font-Montserrat'>
        <div className='flex xl:flex-row lg:flex-row 2xl:flex-row mobile:flex-col py-4 text-sm justify-evenly border-b border-gray-700
         2xl:mx-20 xl:mx-20 lg:mx-20 md:mx-20'>
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <img src={hommastonlogo} size={10} alt="img" className='w-40' />
                </div>
                <div className='flex'>
                    <ul className='flex gap-8'>
                        <li><LiaLinkedinIn size={20} className='shadow-md shadow-gray-300 rounded-full'/></li>
                        <li>2</li>
                        <li>3</li>
                        <li><FaFacebook size={20} className='shadow-md shadow-gray-300 rounded-full'/></li>
                    </ul>
                </div>
            </div>

            <div className=''>
                <div className='flex flex-col items-center mb-8'>
                    <p>Division Red</p>
                    <p>Tel:+2347057925355</p>
                    <p>Email:learning@hommaston.com</p>
                </div>

                <div className='flex flex-col items-center'>
                    <p>Division Blue</p>
                    <p>Tel:+2347055519436</p>
                    <p>Email:workplaceskills@hommaston.com</p>
                </div>
            </div>

            <div className='flex flex-col 2xl:items-end xl:items-end lg:items-end md:items-center sm:items-center mobile:items-center'>
                <div className='flex mobile:flex-col items-center justify-center'>
                    <p className='text-center'>9.Adebola Street off Adeniran ogunsanya Rd,Surulere.Lagos.</p>
                    <img src="" alt="img" />
                </div>
                <div className='my-4 md:items-end sm:items-end flex mobile:justify-center mobile:items-center'>
                    <p className='text-center'>5th Floor.Knight Frank Building, 24 Campbell Street. Lagos Island Nigeria.</p>
                </div>
                <div className='flex my-4'>
                    <p>+234 705 551 9436</p>
                    <img src="" alt="img" />
                </div>

                <div className='flex'>
                    <p>+234 903 419 0032</p>
                    <img src="" alt="img" />
                </div>

                <div className='flex items-center'>
                    <div className='flex flex-col 2xl:items-end mobile:items-center'>
                        <p className='underline'>info@hommaston.com</p>
                        <p className='underline'>workplaceskills@hommaston.com</p>
                    </div>
                    <div>
                        <img src="" alt="img" />
                    </div>
                </div>
            </div>
        </div>


        <div className='flex justify-evenly mobile:flex-col mobile:items-center text-sm my-2'>
            <div>
                <ul className='flex gap-2'>
                    <li className='border-r-2 pr-2 border-gray-700'>Home</li>
                    <li className='border-r-2 pr-2  border-gray-700'>Contact</li>
                    <li className='border-r-2 pr-2 border-gray-700'>Legal Notice</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>

            <div>
                <p className='text-center'>
                    Hommaston Training and Engineering - Copyright @2024.
                </p>
            </div>

        </div>

    </div>
  )
}

export default Footer