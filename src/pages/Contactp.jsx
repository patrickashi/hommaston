import React from 'react'
import Footer from '../components/Footer';
import contactmapbg from "../assets/contactmapbg.png";
import { FaCirclePlay } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import Contactform from '../components/Contactform';

const Contactp = () => {
  return (
    <div className='h-screen font-Montserrat'>
            <div className='relative w-full h-[300px] bg-cover bg-center' style={{ backgroundImage: `url(${contactmapbg})` }}>
                {/* <img src={hepburnpic}  alt="img" size={20} className='h-full w-full object-cover z-0' /> */}
                <div className='absolute 2xl:mt-[255px] mobile:mt-[262px] mx-auto border-2 flex justify-center 
                xl:mt-[255px] lg:mt-[255px] md:mt-[262px] sm:mt-[262px] items-center inset-x-0 bg-neutral-50/70
                2xl:mx-20 mobile:mx-5 rounded-2xl shadow-md shadow-violet-400'>
                    <h1 className='2xl:text-5xl xl:text-5xl lg:text-5xl mobile:text-3xl py-4 font-bold 2xl:text-gray-700
                    mobile:text-gray-600  text-center rounded-full'>Get in Touch</h1>
                </div>
            </div>

            <div className='text-2xl font-bold text-gray-600 pt-24 mb-12 ml-4 text-center '>
                <h1 className='2xl:hidden xl:hidden lg:hidden md:hidden mobile:block animate-bounce'>Contact us</h1>
            </div>

            {/* <Contactform /> */}

            

            <div className='pt-20 mb-40 h-[400px] w-full bg-cover bg-start py-8 flex justify-evenly'
            style={{ backgroundImage:  `url(${contactmapbg})` }}>

                <div className='mobile:hidden 2xl:block xl:block lg:block md:block'>
                  <p className='text-2xl font-bold text-[#FF0000] animate-ping'>Contact Us</p>
                </div>

                <div className='2xl:w-[450px] xl:w-[450px] lg:w-[450px] md:w-[450px] mobile:w-[350px] 2xl:h-[450px] xl:h-[450px] lg:h-[450px] md:h-[450px] mobile:h-[500px]  pt-6 pb-12
                bg-white rounded-2xl 2xl:mt-[-90px] xl:mt-[-90px] lg:mt-[-90px] md:mt-[-90px] mobile:mt-[-100px] border-2
                  border-gray-300 shadow-lg shadow-[#FF0000]'>

                    <form >
                        <div className='flex mobile:flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row gap-2 px-4'>
                            <div className=''>
                                <input type="text" className='rounded-lg bg-gray-300 pl-2 mobile:w-full py-4' placeholder='firstname' />
                            </div>
                            <div>
                                <input type="text" className='rounded-lg bg-gray-300 pl-2 mobile:w-full py-4' placeholder='lastname' />
                            </div>
                        </div>

                        <div className='px-4'>
                            <input type="text" className='rounded-lg bg-gray-300 pl-2 my-2 w-full py-4 ' placeholder='Email' />
                        </div>

                        <div className='flex mobile:flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row gap-2 px-4'>
                            <div className=''>
                                <input type="text" className='rounded-lg bg-gray-300 pl-2 mobile:w-full py-4' placeholder='Address' />
                            </div>
                            <div>
                                <input type="text" className='rounded-lg bg-gray-300 pl-2 mobile:w-full py-4' placeholder='phone no' />
                            </div>
                        </div>

                        <div className='px-4'>
                            <input type="text" className='rounded-lg bg-gray-300 pl-2 my-2 w-full 2xl:pb-20 xl:pb-20 lg:pb-20 md:pb-20 mobile:pb-10 py-4 text-sm' placeholder='other information you want us to know' />
                        </div>

                        <div className='flex 2xl:mt-8 xl:mt-8 lg:mt-8 md:mt-8 mobile:mt-2 justify-between'>

                            <div className='flex items-center ml-2'>
                              <ul className='flex gap-8'>
                                <li><LiaLinkedinIn size={20} className='shadow-md shadow-gray-300 rounded-full'/></li>
                                <li> <FaInstagramSquare size={20} className='shadow-md shadow-gray-300 rounded-full' /> </li>
                                <li> <FaCirclePlay size={20} className='shadow-md shadow-gray-300 rounded-full'/></li>
                                <li><FaFacebook size={20} className='shadow-md shadow-gray-300 rounded-full'/></li>
                             </ul>
                            </div> 

                            <div>
                              <button className='bg-[#0504AA] text-white rounded-tl rounded-bl px-4 py-2 hover:scale-105 duration-200'>Send Message</button>
                            </div>
                            
                        </div>
                        
                    </form>
                </div> 

           

                
            </div>

            <Footer />
    </div>
  )
}

export default Contactp