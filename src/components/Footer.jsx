import React from 'react'
import hommastonlogo from "../assets/hommastonlogo.png";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import hommastonashlogo from "../assets/hommastonashlogo.png";

const Footer = () => {
  return (
    <div className='bg-black py-8 text-white font-Montserrat
    mobile:text-xs sm:text-xs '>


        <div className='flex xl:flex-row lg:flex-row 2xl:flex-row mobile:flex-col py-4 text-sm justify-evenly border-b border-gray-700
         2xl:mx-28 xl:mx-28 lg:mx-20 md:mx-20'>
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <img src={hommastonashlogo} size={10} alt="img" className='w-20' />
                </div>
                <div className='flex py-6'>
                    <ul className='flex gap-8'>
                        <li><LiaLinkedinIn size={20} className='shadow-md shadow-gray-300 rounded-full'/></li>
                        <li> <FaInstagramSquare size={20} className='shadow-md shadow-gray-300 rounded-full' /> </li>
                        <li> <FaCirclePlay size={20} className='shadow-md shadow-gray-300 rounded-full'/></li>
                        <li><FaFacebook size={20} className='shadow-md shadow-gray-300 rounded-full'/></li>
                    </ul>
                </div>
            </div>

            <div className='mobile:text-xs'>
                <div className='flex flex-col items-center mb-8 '>
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

            <div className='flex flex-col 2xl:items-end xl:items-end lg:items-end md:items-center sm:items-center mobile:items-center
            mobile:text-xs'>

                <div className='flex mobile:flex-row mobile:items-center '>
                    <div className='flex flex-col 2xl:items-end xl:items-end lg:items-end md:items-end'>
                        <p className='text-center'>9.Adebola Street off Adeniran ogunsanya Rd,Surulere.Lagos.</p>
                        <p className='text-center'>5th Floor.Knight Frank Building, 24 Campbell Street. Lagos Island Nigeria.</p>
                    </div>
                    <div className='mobile:hidden lg:block xl:block 2xl:block'>
                        <CiLocationOn size={20}  className='ml-2'/>
                    </div>
                </div>
                {/* <div className='my-4 md:items-end sm:items-end flex mobile:justify-center mobile:items-center'>
                    
                </div> */}
                <div className='flex my-4'>
                    <p>+234 705 551 9436</p>
                    <FaSquarePhoneFlip size={20}  className='ml-2 mobile:hidden lg:block xl:block 2xl:block'/>
                </div>

                <div className='flex'>
                    <p>+234 903 419 0032</p>
                    <FaWhatsapp size={20}  className='ml-2 mobile:hidden lg:block xl:block 2xl:block'/>

                </div>

                <div className='flex items-center mobile:text-xs'>
                    <div className='flex flex-col 2xl:items-end mobile:items-center'>
                        <p className='underline'>info@hommaston.com</p>
                        <p className='underline'>workplaceskills@hommaston.com</p>
                    </div>
                    <div className='mobile:hidden lg:block xl:block 2xl:block'>
                        <IoIosMail size={20}  className='ml-2'/>
                    </div>
                </div>
            </div>
        </div>


        <div className='flex justify-evenly mobile:flex-col 2xl:flex-row xl:flex-row lg:flex-row mobile:items-center text-xs my-2'>
            <div>
                <ul className='flex gap-2'>
                    <li className='border-r-2 pr-2 border-gray-700'>Home</li>
                    <li className='border-r-2 pr-2  border-gray-700'>Contact</li>
                    <li className='border-r-2 pr-2 border-gray-700'>Legal Notice</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>

            <div className='flex gap-1'>
                <p className='text-center'>
                    Hommaston Training and Engineering - Copyright @2024.
                </p>
                <div> <img src={hommastonashlogo} size={20} className='w-5' alt="logo" /></div>
            </div>

        </div>

    </div>
  )
}

export default Footer