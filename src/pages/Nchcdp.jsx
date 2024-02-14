import React from 'react'
import { Link } from "react-router-dom";
import instrumentationandcontrol from "../assets/instrumentationandcontrol.jpg";

import { MdArrowBackIosNew } from "react-icons/md";
import Footer from '../components/Footer';

const Nchcdp = () => {
  return (
    <div className='font-Montserrat'>
        <div className='relative w-full h-[300px] bg-cover bg-center' style={{ backgroundImage: `url(${instrumentationandcontrol})` }}>
            {/* <img src={hepburnpic}  alt="img" size={20} className='h-full w-full object-cover z-0' /> */}
            <div className='absolute 2xl:mt-[255px] mobile:mt-[265px] mx-auto border-2 flex justify-center 
            xl:mt-[255px] lg:mt-[255px] md:mt-[265px] sm:mt-[265px] items-center inset-x-0 bg-neutral-50/70
            2xl:mx-20 mobile:mx-5 rounded-xl shadow-md shadow-violet-400'>
                <Link to="/Servicesp"> <MdArrowBackIosNew className='mr-3 rounded-md bg-gray-100 w-10 '/> </Link>
                <h1 className='2xl:text-5xl xl:text-5xl lg:text-5xl sm:text-2xl mobile:text-2xl py-4 font-bold 2xl:text-[#0504AA]
                mobile:text-[#0504AA]  text-center rounded-full'>NC-HCD Training</h1>
            </div>
        </div>


        <div className='pt-20 mobile:grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 2xl:mx-[100px] mobile:mx-4 sm:mx-4 md:mx-10 lg:mx-20 xl:mx-20' >
            <div>
                <p>
                    Hommaston is committed in helping companies fulfilling their obligation with the NCDMB by facilitating and delivering 
                    their NC-HCD training program. We have done this for over a decade and have given our client a worry-free experience.
                </p>
            </div>
            <div></div>
        </div>

        <div className='my-20 2xl:mx-[200px] xl:mx-20 lg:mx-20 md:mx-10 sm:mx-5 mobile:mx-4
        2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 mobile:grid'>
            <div className='2xl:col-span-2 xl:col-span-2 lg:col-span-2'>
                <p>
                    Meeting the client's expectation and deliver as required qualitatively as previously explained.
                </p>

                <p className='my-8'>
                    Achievement of ‘work based’ skills with our deliverable-based training approach
                </p>

                <p>
                    At conclusion of training program, we would have imparted key industry knowledge,
                    improved trainees' chances of employability and increased capacity in industry.
                </p>

                <p className='my-8'>
                    Hommaston supports NCDMB common objective of increased empowerment, employment opportunities,
                    skills acquisition in all trainees and professional independence
                </p>

            </div>
            <div></div>
            

        </div>

        <Footer />

    </div>
  )
}

export default Nchcdp