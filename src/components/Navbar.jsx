import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import { MdHome } from "react-icons/md";
import { BsPatchQuestion } from "react-icons/bs";
import { GrServices } from "react-icons/gr";

import { LiaServicestack } from "react-icons/lia";
import { AiOutlineTeam } from "react-icons/ai";
import { LuContact } from "react-icons/lu";
import hommastonlogo from "../assets/hommastonlogo.png"
import { Link } from "react-router-dom";


const  Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        // the opposite of nav
        setNav(!nav)
    }
    return ( 
        <div className="flex justify-center items-center max-w-[1240px] mx-auto px-4 text-white font-Montserrat">
            <div className="text-black flex justify-center items-center">
                <div className="mobile:hidden sm:hidden 2xl:block xl:block lg:block">
                    <ul className="flex gap-3 mr-3">
                        <Link to="/"><li>Home</li></Link>
                        <li>About Us</li>
                        <li> Services</li>
                    </ul>
                </div>
                <div className="mx-4 pb-4 mobile:block mobile:pt-2 mobile:ml-0 mobile:pl-1">
                    <img src={hommastonlogo} alt="logo" className="w-40 mobile:w-30 "/>
                </div>
                <div className="mobile:hidden sm:hidden 2xl:block xl:block lg:block">
                    <ul className="flex gap-3">
                        <li>Hepburn</li>
                        <li>Our Team</li>
                        <li> Contact</li>
                    </ul>
                </div>
            </div>

            <div onClick={handleNav} className="flex mobile:block mobile:ml-auto md:hidden 2xl:hidden lg:hidden xl:hidden">
                {nav ? <AiOutlineClose className="text-black" size={20}/> : <AiOutlineMenu className="text-black" size={20}/>} 
            </div>

            {/* toggle menu */}
            <div className={nav ? "fixed left-0 top-0 h-full w-[85%] border-r border-r-gray-900 ease-out duration-500 bg-black" : "fixed left-[-100%]"}>

                <div className="mx-4 pt-4">
                    <img src={hommastonlogo} alt="logo" className="w-40"/>
                </div>
                <ul className="p-4 my-6 ">
                    <div className="flex gap-2 items-center py-2">
                        <MdHome  className="flex items-center"/>
                        <li className="">Home</li>
                    </div>
                    <div className="flex gap-2 items-center  py-2">
                        <BsPatchQuestion className="flex items-center" />
                        <li className="">About Us</li>
                    </div>
                    <div className="flex gap-2 items-center  py-2">
                        <GrServices className="flex items-center"/>
                        <li className="">Services</li>
                    </div>
                    <div className="flex gap-2 items-center  py-2">
                        <LiaServicestack className="flex items-center"/>
                        <li className="">Hepburn</li>
                    </div>
                    <div className="flex gap-2 items-center  py-2">
                        <AiOutlineTeam className="flex items-center"/>
                        <li className="">Our Team</li>
                    </div>
                    <div className="flex gap-2 items-center  py-2">
                        <LuContact className="flex items-center" />
                         <li className="">Contact</li>
                    </div>
                </ul>

               {/* <div className="">
                    <button className=" my-4 w-[95%] mx-2  py-3  rounded-md px-11 bg-gradient-to-b from-[#047857] to bg-[#2dd4bf] text-white">Login</button>
                    <button className=" w-[95%] mx-2  py-3 border-2 border-[#2dd4bf]  rounded-md px-11  text-[#2dd4bf]">Sign up</button>
                </div> */}
            </div>
        </div>
     );
}
 
export default Navbar;