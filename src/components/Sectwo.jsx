import React from 'react'
import { Link } from "react-router-dom";
import tower from "../assets/tower.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import homeiconclassroom from "../assets/homeiconclassroom.png";
import homeiconred2 from "../assets/homeiconred2.png";
import homeiconwhite1 from "../assets/homeiconwhite1.png";

const Sectwo = () => {
  return (
    <div className='font-Montserrat'>
        <div className='2xl:mx-28 xl:mx-28 mobile:mx-4 mobile:grid sm:grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 border-y border-gray-300'>

            <div className='flex justify-center'>
                <img src={tower} size={20} className='md:w-full 2xl:w-80 object-contain xl:w-80 lg:w-80 mobile:w-80' alt="img" />
            </div>

            <div className='py-6'>
                <p className='text-2xl w-120 font-bold py-4 ml-4'>
                    With The Best &
                    Most Experienced <span className='text-[#FF0000]'>Mentors</span>
                </p>

                <div className='flex justify-between'>
                    <div className='grid'>
                        <div className='flex'>
                            <img src={homeiconclassroom} size={20} className='w-14' alt="img" />
                            <h1 className='font-bold flex items-center'>Classroom Training</h1>
                        </div>
                       <div className=''>
                            <p className=' border-l-2 border-gray-400 px-3 ml-[29px]'>
                                There is no better investment than
                                learning. Discover our hands-on courses
                            </p>
                       </div>
                    </div>
                        
                    <div className='flex items-center'>
                        <Link to="Hommastonbluep/">
                            <MdOutlineKeyboardArrowRight className='rounded-full bg-white text-[#FF0000] border border-[#FF0000] hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] duration-200 cursor-pointer ' size={40}/>
                        </Link>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div className='grid'>
                        <div className='flex'>
                            <img src={homeiconred2} size={20} className='w-14' alt="img" />
                            <h1 className='font-bold flex items-center'>Online Training</h1>
                        </div>
                       <div className=''>
                            <p className='ml-[29px] border-l-2 border-[#FF0000] px-3'>
                                There is no better investment than
                                learning. Discover our hands-on courses
                            </p>
                       </div>
                    </div>
                        
                    <div className='flex items-center'>
                        <MdOutlineKeyboardArrowRight className='rounded-full bg-[#FF0000] text-white border border-[#FF0000] hover:bg-white hover:text-[#FF0000] hover:border-[#FF0000] duration-200 cursor-pointer ' size={40}/>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div className='grid'>
                        <div className='flex'>
                            <img src={homeiconwhite1} size={20} className='w-14' alt="img" />
                            <h1 className='font-bold flex items-center'>Blended Training</h1>
                        </div>
                       <div className=''>
                            <p className='ml-[29px] border-l-2 border-gray-400 px-3'>
                                There is no better investment than
                                learning. Discover our hands-on courses
                            </p>
                       </div>
                    </div>
                        
                    <div className='flex items-center'>
                        <Link to="Hommastonredp/">
                            <MdOutlineKeyboardArrowRight className='rounded-full bg-white text-[#FF0000] border border-[#FF0000] hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] duration-200 cursor-pointer ' size={40}/>
                        </Link>
                    </div>
                </div>


            </div>

        </div>
    </div>
  )
}

export default Sectwo