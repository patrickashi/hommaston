import React from 'react'

import iso1 from "../assets/iso1.png";
import iso9 from "../assets/iso9.png";
import lpilogo from "../assets/lpilogo.png";
import acdt from "../assets/acdt2.png";
import CPD from "../assets/CPD.png";

const Accreditors = () => {
  return (
    <div className=' 2xl:mx-28 mobile:mx-4 xl:mx-28 lg:mx-14 md:mx-10 sm:mx-4 py-12 px-4 font-Montserrat'>

        <p className='text-3xl font-bold text-center mb-10'>Hommaston's Accreditors</p>

        <div className='flex justify-center 2xl:gap-8 xl:gap-4 lg:gap-4 mobile:gap-4 flex-wrap'>
            <div> <img src={acdt} alt="logo" size={20} className='mobile:w-[70px] 2xl:w-[150px] xl:w-[150px] lg:w-[150px]'/></div>
            <div><img src={iso9} size={20} alt="logo" className='mobile:w-[70px] 2xl:w-[150px] xl:w-[150px] lg:w-[150px]'/></div>
            <div> <img src={iso1} size={20} alt="logo" className='mobile:w-[70px] 2xl:w-[150px] xl:w-[150px] lg:w-[150px]'/></div>
            <div> <img src={CPD} alt="logo" size={20} className='mobile:w-[50px] 2xl:w-[100px] xl:w-[100px] lg:w-[100px]'/></div>  
            <div> <img src={lpilogo} alt="logo" size={20} className='mobile:w-[60px] 2xl:w-[120px] xl:w-[120px] lg:w-[120px]'/></div>  
        </div>
    </div>
  )
}

export default Accreditors