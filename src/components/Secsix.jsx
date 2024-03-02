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
                {/* <h1 className='font-bold text-2xl mb-4'>Impactfull Experience</h1>
                <p>
                    The experience got me a job at SPIE oil and gas engineering due to my
                    gained ability to express sufficient knowledge and expertise in the utilisation
                    of necessary engineering softwares such as Plant 3D in order to produce specific
                    deliverables for the Egina project as well as the AKPO project 
                    (2 projects SPIE oil and gas services were involved in).
                </p>
                <p className='my-4'>
                    I have now left SPIE and joined British American Tobacco Nigeria. Currently in the supply
                    chain department as their factory scheduler.
                </p>
                <p>
                    (Jeffrey Ijeomah)
                </p> */}

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