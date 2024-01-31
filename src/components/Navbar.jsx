import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import hommastonlogo from "../assets/hommastonlogo.png"


const  Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        // the opposite of nav
        setNav(!nav)
    }
    return ( 
        <div className="flex justify-center items-center max-w-[1240px] mx-auto px-4 text-white font-Montserrat">
            <div className="text-black flex justify-center items-center">
                <div className="mobile:hidden 2xl:block xl:block lg:block">
                    <ul className="flex gap-3">
                        <li>Home</li>
                        <li>About Us</li>
                        <li> Services</li>
                    </ul>
                </div>
                <div className="mx-4 pb-4">
                    <img src={hommastonlogo} alt="logo" className="w-40"/>
                </div>
                <div className="mobile:hidden 2xl:block xl:block lg:block">
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
            <div className={nav ? "fixed left-0 top-0 h-full w-[90%] border-r border-r-gray-900 ease-out duration-500 bg-black" : "fixed left-[-100%]"}>

                <div className="mx-4 pt-4 flex justify-center">
                    <img src={hommastonlogo} alt="logo" className="w-40"/>
                </div>
                <ul className="p-4 my-6">
                    <li className="p-4 border-l mb-2 border-blue-600">Home</li>
                    <li className="p-4 border-l mb-2 border-green-600">About Us</li>
                    <li className="p-4 border-l mb-2 border-red-600">Services</li>
                    <li className="p-4 border-l mb-2 border-pink-600">Hepburn</li>
                    <li className="p-4 border-l mb-2 border-yellow-600">Our Team</li>
                    <li className="p-4 border-l border-emerald-300">Contact</li>
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