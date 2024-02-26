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
    // dropdownforwidescreens
    const DropdownLink = ({ title, children }) => {
        const [isOpen, setIsOpen] = useState(false);
    
        return (
          <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <Link to="/Servicesp" href="#" className="text-black px-3 py-2">{title}&#9662;</Link>
            {isOpen && (
              <div className="absolute z-10 mt-2 text-center  bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
                <ul>
                  {children}
                </ul>
              </div>
            )}
          </div>
        );
      };

      const DropdownItem = ({ children }) => {
        return (
          <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{children}</li>
        );
      };

        // dropdownfortogglemenu
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);

        const toggleDropdown = () => {
            setIsDropdownOpen(!isDropdownOpen);
        };



    const [nav, setNav] = useState(false);

    const handleNav = () => {
        // the opposite of nav
        setNav(!nav)
    }
    return ( 
        <div className="flex justify-center items-center max-w-[1240px] mx-auto px-4 text-white font-Montserrat">
            <div className="text-black flex justify-center items-center font-bold">
                <div className="mobile:hidden sm:hidden md:block 2xl:block xl:block lg:block">
                    <ul className="flex gap-3">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutusp">About Us</Link></li>
                        <li>
                            <DropdownLink to="/Servicesp" title="Services">
                                <Link to="/Hommastonbluep" className="rounded-md hover:bg-[#0504AA] hover:text-white duration-200">
                                    <DropdownItem >Division Blue</DropdownItem> 
                                </Link>
                                <Link to="/Hommastonredp">
                                    <DropdownItem>Division Red</DropdownItem> 
                                </Link>
                                <Link to="/Nchcdp"> 
                                    <DropdownItem>NC-HCD Training</DropdownItem>
                                </Link>
                            </DropdownLink>
                        </li>
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
                <ul className="p-4 my-2 ">
                    <div className="flex gap-2 items-center py-2 my-4">
                        <MdHome  className="flex items-center"/>
                        <li className=""> <Link to="/"> Home</Link></li>
                    </div>
                    <div className="flex gap-2 items-center  py-2 my-5">
                        <BsPatchQuestion className="flex items-center" />
                        <li className=""><Link to="/aboutusp">About Us</Link></li>
                    </div>
                    <div className="flex gap-2 items-center  py-2 my-2">
                        <GrServices className="flex items-center"/>
                        <li onClick={toggleDropdown}> 
                            <Link to="/Servicesp">Services &#9662;</Link>
                        </li>
                    </div>

                            {isDropdownOpen && (
                                <div className="absolute top-68 left-4 bg-gray-100 text-black rounded-md py-4 px-2 text-center w-[100px]">
                                    <li className="bg-gray-300 rounded-md hover:bg-[#0504AA] hover:text-white duration-200"><Link to="/Hepburnp">Division Blue</Link></li>
                                    <li className="bg-gray-300 rounded-md hover:bg-[#ED1C24] hover:text-white duration-200 my-2"><Link to="/Ourteamp">Division Red</Link></li>
                                    <li className="bg-gray-300 rounded-md hover:bg-[#0504AA] hover:text-white duration-200"> <Link to="/Contactp">NC-HCD Training</Link></li>
                                </div>
                            )}


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

                <div className='flex-col 2xl:mt-8 xl:mt-8 lg:mt-8 md:mt-8 mobile:mt-2 justify-between gap-4'>

                    <div className='flex items-center ml-3'>
                        <ul className='flex gap-8 '>
                            <li><LiaLinkedinIn size={20} className='shadow-md shadow-gray-300 rounded-full hover:scale-110 duration-200 cursor-pointer'/></li>
                            <li> <FaInstagramSquare size={20} className='shadow-md shadow-gray-300 rounded-full hover:scale-110 duration-200 cursor-pointer' /> </li>
                            <li> <FaCirclePlay size={20} className='shadow-md shadow-gray-300 rounded-full hover:scale-110 duration-200 cursor-pointer'/></li>
                            <li><FaFacebook size={20} className='shadow-md shadow-gray-300 rounded-full hover:scale-110 duration-200 cursor-pointer'/></li>
                        </ul>
                    </div> 

                    <div className="mr-2 mt-6">
                        <Link to="/Contactp">
                            <button className='bg-[#0504AA] ml-2 text-white rounded-md px-4 py-2 hover:scale-105 duration-200'>Send Message</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Navbar;