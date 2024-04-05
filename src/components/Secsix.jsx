import React from 'react'
import people1 from "../assets/people1.png";
import people2 from "../assets/people2.png";
import Changetestimonials from './Changetestimonials';

const Secsix = () => {
  return (
    <div className='font-Montserrat'>
        <div className='flex justify-evenly items-center mobile:flex-col 2xl:flex-row bg-black
        xl:flex-row lg:flex-row md:flex-row'>
            <div>
                <img src={people1} className='w-80' alt="img" />
            </div>

            <div className='text-white text-center w-80 py-8'>

                <Changetestimonials />

            </div>

            <div>
                <img src={people2} className='w-80' alt="img" />
            </div>
        </div>
    </div>
  )
}

export default Secsix