import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import { MdHome } from "react-icons/md";
import { BsPatchQuestion } from "react-icons/bs";
import { GrServices } from "react-icons/gr";

import { LiaServicestack } from "react-icons/lia";
import { AiOutlineTeam } from "react-icons/ai";
import { LuContact } from "react-icons/lu";
import hommastonlogo from "../assets/hommastonlogo.png";
import hommastonashlogo from "../assets/hommastonashlogo.png";
import { Link } from "react-router-dom";
import "../index.css"

import { FaCirclePlay } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";


const  Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        // the opposite of nav
        setNav(!nav)
    }
    return ( 
        <div className="flex justify-center items-center max-w-[1240px] mx-auto px-4 text-white font-Montserrat">
            <div className="text-black flex justify-center items-center font-bold">
                <div className="mobile:hidden sm:hidden md:block 2xl:block xl:block lg:block">
                    <ul className="flex gap-3 mr-3">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutusp">About Us</Link></li>
                        <li><Link to="/Servicesp">Services</Link> </li>
                    </ul>
                </div>
                <div className="mx-4 pb-4 mobile:block mobile:pt-2 mobile:ml-0 mobile:pl-1">
                    <Link to="/"><img src={hommastonlogo} alt="logo" className="w-40 mobile:w-30 "/></Link>
                </div>
                <div className="mobile:hidden sm:hidden md:block 2xl:block xl:block lg:block">
                    <ul className="flex gap-3">
                        <li><Link to="/Hepburnp">Hepburn</Link></li>
                        <li><Link to="/Ourteamp">Our Team</Link></li>
                        <li> <Link to="/Contactp">Contact</Link></li>
                    </ul>
                </div>
            </div>

            <div onClick={handleNav} className="flex mobile:block mobile:ml-auto md:hidden 2xl:hidden lg:hidden xl:hidden">
                {nav ? <AiOutlineClose className="text-black" size={20}/> : <AiOutlineMenu className="text-black" size={20}/>} 
            </div>

            {/* toggle menu */}
            <div className={nav ? "absolute z-20 left-0 top-0 h-full w-[85%] border-r border-r-gray-900 ease-out duration-500 bg-black" : "fixed left-[-100%]"}>

                <div className="mx-4 pt-4">
                    <Link to="/">
                        <img src={hommastonashlogo} alt="logo" className="w-16"/>
                    </Link>
                </div>
                <ul className="p-4 my-6 ">
                    <div className="flex gap-2 items-center py-2 my-4">
                        <MdHome  className="flex items-center"/>
                        <li className=""> <Link to="/"> Home</Link></li>
                    </div>
                    <div className="flex gap-2 items-center  py-2 my-5">
                        <BsPatchQuestion className="flex items-center" />
                        <li className=""><Link to="/aboutusp">About Us</Link></li>
                    </div>
                    <div className="flex gap-2 items-center  py-2 my-5">
                        <GrServices className="flex items-center"/>
                        <li className=""> <Link to="/Servicesp">Services</Link></li>
                    </div>
                    <div className="flex gap-2 items-center  py-2 my-5">
                        <LiaServicestack className="flex items-center"/>
                        <li className=""><Link to="/Hepburnp">Hepburn</Link></li>
                    </div>
                    <div className="flex gap-2 items-center  py-2 my-5">
                        <AiOutlineTeam className="flex items-center"/>
                        <li className=""><Link to="/Ourteamp">Our Team</Link></li>
                    </div>
                    <div className="flex gap-2 items-center  py-2 my-5">
                        <LuContact className="flex items-center" />
                         <li className=""><Link to="/Contactp">Contact</Link></li>
                    </div>
                </ul>

               {/* <div className="">
                    <button className=" my-4 w-[95%] mx-2  py-3  rounded-md px-11 bg-gradient-to-b from-[#047857] to bg-[#2dd4bf] text-white">Login</button>
                    <button className=" w-[95%] mx-2  py-3 border-2 border-[#2dd4bf]  rounded-md px-11  text-[#2dd4bf]">Sign up</button>
                </div> */}

                <div className='flex 2xl:mt-8 xl:mt-8 lg:mt-8 md:mt-8 mobile:mt-8 justify-between'>

                    <div className='flex items-center ml-2'>
                        <ul className='flex gap-8 '>
                            <li><LiaLinkedinIn size={20} className='shadow-md shadow-gray-300 rounded-full hover:scale-110 duration-200 cursor-pointer'/></li>
                            <li> <FaInstagramSquare size={20} className='shadow-md shadow-gray-300 rounded-full hover:scale-110 duration-200 cursor-pointer' /> </li>
                            <li> <FaCirclePlay size={20} className='shadow-md shadow-gray-300 rounded-full hover:scale-110 duration-200 cursor-pointer'/></li>
                            <li><FaFacebook size={20} className='shadow-md shadow-gray-300 rounded-full hover:scale-110 duration-200 cursor-pointer'/></li>
                        </ul>
                    </div> 

                    <div className="mr-2 ">
                        <Link to="/Contactp">
                            <button className='bg-[#0504AA] ml-4 text-white rounded-md px-4 py-2 hover:scale-105 duration-200'>Send Message</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Navbar;