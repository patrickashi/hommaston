import React from 'react'
import banaourteam from "../assets/banaourteam.jpg";
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import team5 from "../assets/team5.png";
import team6 from "../assets/team6.png";

const Ourteamp = () => {
  return (
    <div className='h-screen font-Montserrat'>
            <div className='relative w-full h-[300px] bg-cover bg-center' style={{ backgroundImage: `url(${banaourteam})` }}>
                <div className='absolute 2xl:mt-[255px] mobile:mt-[260px] mx-auto border-2 flex justify-center 
                xl:mt-[255px] lg:mt-[255px] md:mt-[260px] sm:mt-[260px] items-center inset-x-0 bg-neutral-50/70 
                2xl:mx-20 mobile:mx-5 rounded-2xl shadow-md shadow-violet-400'>
                    <h1 className='2xl:text-5xl xl:text-5xl lg:text-5xl mobile:text-3xl py-4 font-bold 2xl:text-gray-700
                    mobile:text-gray-600 text-center rounded-full'>Our Team</h1>
                </div>
            </div>

            <div className='2xl:mx-[300px] xl:mx-20 lg:mx-20 md:mx-10 sm:mx-5 mobile:mx-4 py-20'>
                <p className='2xl:text-center xl:text-center lg:text-center md:text-center sm:text-center mobile:text-center'>
                  HOMMASTON team of experienced professionals are responsible for the strategic direction and the day-to-day
                  operations of the organisation. Covering all aspects of operations, sales, product strategy, administration
                  and finance, our team works together to ensure the continued success of the organisation
                </p>
            </div>

          <div className='flex flex-wrap justify-center'>

            <div className='flex justify-center my-6'>
              <div className='relative'>
                <img src={team1} alt="img" />
                <div className='absolute 2xl:top-20 xl:top-20 lg:top-20 md:top-20 sm:top-20 mobile:top-8 left-10'>
                  <div className='text-xl font-bold'>Joseph Carew</div>
                  <div className='2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-xl mobile:text-sm my-2 text-[#000000]
                  mobile:w-60 2xl:w-80 xl:w-80 lg:w-80 md:w-80 sm:w-80'>Chief Executive Officer</div>
                  <Link to="https://www.linkedin.com/in/joseph-carew-1619ab42/">
                    <button className='bg-[#ED1C24] text-white rounded-xl px-4 font-bold hover:scale-105 duration-200'>Follow</button>
                  </Link>
                </div>
              </div>
            </div>


            <div className='flex justify-center my-6'>
              <div className='relative'>
                <img src={team5} alt="img" />
                <div className='absolute 2xl:top-20 xl:top-20 lg:top-20 md:top-20 sm:top-20 mobile:top-8 left-10'>
                  <div className='text-xl font-bold'>Taiwo Soyannwo</div>
                  <div className='2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-xl mobile:text-sm my-2 text-[#000000]
                  mobile:w-40 2xl:w-80 xl:w-80 lg:w-80 md:w-80 sm:w-80'>Chief Operating Officer</div>
                  <Link to="https://www.linkedin.com/in/taiwo-soyannwo-b8236114/">
                    <button className='bg-[#ED1C24] text-white rounded-xl px-4 font-bold hover:scale-105 duration-200'>Follow</button>
                  </Link>
                </div>
              </div>
            </div>



            

            <div className='flex justify-center my-6'>
              <div className='relative'>
                <img src={team3} alt="img" />
                <div className='absolute 2xl:top-20 xl:top-20 lg:top-20 md:top-20 sm:top-14 mobile:top-6 left-10'>
                  <div className='text-xl font-bold'>Dapo Omolade</div>
                  <div className='2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-xl mobile:text-sm my-2 text-[#000000]
                  mobile:w-60 2xl:w-80 xl:w-80 lg:w-80 md:w-80 sm:w-80'>Consultant-Trainer-Coach for Hommaston's HSE</div>
                  <Link to="https://www.linkedin.com/in/dapo-omolade-3757856/">
                    <button className='bg-[#ED1C24] text-white rounded-xl px-4 font-bold hover:scale-105 duration-200'>Follow</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className='flex justify-center my-6'>
              <div className='relative'>
                <img src={team4} alt="img" />
                <div className='absolute 2xl:top-16 xl:top-16 lg:top-16 md:top-16 sm:top-10 mobile:top-4 left-10'>
                  <div className='text-xl font-bold'>Nimot Muili</div>
                  <div className='2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-xl mobile:text-sm my-2 text-[#000000]
                  mobile:w-60 2xl:w-80 xl:w-80 lg:w-80 md:w-80 sm:w-88'>Principal Civil Facilitator, Department Director, EFD programs</div>
                  <Link to="https://www.linkedin.com/in/nimotmuili/">
                    <button className='bg-[#ED1C24] text-white rounded-xl px-4 font-bold hover:scale-105 duration-200'>Follow</button>
                  </Link>
                </div>
              </div>
            </div>


            {/* <div className='flex justify-center my-6'>
              <div className='relative'>
                <img src={team2} alt="img" />
                <div className='absolute 2xl:top-20 xl:top-20 lg:top-20 md:top-20 sm:top-20 mobile:top-8 left-10'>
                  <div className='text-xl font-bold'>...</div>
                  <div className='2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-xl mobile:text-sm my-2 text-[#000000]
                  mobile:w-60 2xl:w-80 xl:w-80 lg:w-80 md:w-80 sm:w-80'>Chief Executive Officer</div>
                  <button className='bg-[#ED1C24] text-white rounded-xl px-4 font-bold hover:scale-105 duration-200'>Follow</button>
                </div>
              </div>
            </div> */}

            

            <div className='flex justify-center my-6'>
              <div className='relative'>
                <img src={team6} alt="img" />
                <div className='absolute 2xl:top-20 xl:top-20 lg:top-20 md:top-20 sm:top-20 mobile:top-8 left-10'>
                  <div className='2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-xl mobile:text-md font-bold'>Oladeji Olawale</div>
                  <div className='2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-xl mobile:text-sm my-2 text-[#000000]
                    mobile:w-40 2xl:w-80 xl:w-80 lg:w-80 md:w-80 sm:w-80'>Director Of Project and Risk Management
                  </div>
                  <Link to="https://www.linkedin.com/in/oladeji-olawale-pmp-pmi-rmp-apmp-0417b8b/">
                    <button className='bg-[#ED1C24] text-white rounded-xl px-4 font-bold hover:scale-105 duration-200'>Follow</button>
                  </Link>
                </div>
              </div>
            </div>



           </div>
            

            <Footer />
    </div>
  )
}

export default Ourteamp