import React from 'react'
import webdesign2 from "../assets/webdesign2.jpg";
import hommastonashlogo from "../assets/hommastonashlogo.png";
import mission from "../assets/mission.png";
import vission from "../assets/vission.png";
import corevalues from "../assets/corevalues.png";

const About = () => {
  return (
    <div className='font-Montserrat'>
        <div className='relative w-full h-[300px]'>
            <img src={webdesign2}  alt="img" size={20} className='h-full w-full object-cover z-0' />
            <div className='absolute 2xl:mt-[-50px] mobile:mt-[-35px] mx-auto border-2 flex justify-center 
            xl:mt-[-50px] lg:mt-[-50px] md:mt-[-35px] sm:mt-[-35px] items-center inset-x-0 bg-neutral-50/70
            2xl:mx-20 mobile:mx-5 rounded-2xl shadow-md shadow-violet-400 z-10'>
                <h1 className='2xl:text-6xl xl:text-6xl lg:text-6xl mobile:text-3xl py-4 font-bold text-gray-700'>About Us</h1>
            </div>
        </div>

        <div className='py-16 mt-10 2xl:mx-20 xl:mx-20 lg:mx-20 md:mx-20 sm:mx-4 mobile:mx-4'>

          <p className='2xl:text-center xl:text-center lg:text-center md:text-center sm:text-start mobile:text-start 2xl:text-xl xl:text-xl lg:text-xl md:text-lg mobile:text-sm'>
            Hommaston operates two core divisions. Red Division(Hommaston Engineering)
            focal delivery of choice skillset for design engineering, facility maintenance
            and operations support competency and performance. The blue division(Hommaston digital)
            handles human capital, Drone tech, Cloud computing, Corporate soft skills
            and all other non-engineering, certification preparatory courses.
          </p>

          <div className='my-8 2xl:mx-20 xl:mx-20 lg:mx-10 md:mx-2 mobile:mx-4'>
            <h1 className='text-2xl text-center font-bold'>Training programmes</h1>
            <div className='mobile:grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 gap-4 my-12'>

              <div className='py-20 bg-gray-300 rounded-xl'></div>
              <div className='py-20 bg-gray-300 rounded-xl'></div>
              <div className='py-40 bg-gray-300 rounded-xl shadow-lg shadow-[#FF0000] hover:scale-105 cursor-pointer duration-200'></div>
              <div className='py-20 bg-gray-300 rounded-xl'></div>
              <div className='py-20 bg-gray-300 rounded-xl'></div>

            </div>
          </div>
        </div>

        <div className=' grid 2xl:grid-cols-2 2xl:mx-40 xl:mx-40 lg:mx-40 md:mx-20 mobile:mx-10'>
          <div className='flex justify-center'>
            <img src={hommastonashlogo} size={20} className='w-80' alt="img" />
          </div>
          <div className=''>
            <p className='flex text-end mt-2'>
              At Our Training Facilities, we prioritize creating a conducive learning environment that promotes comfort and enhances the 
              learning experience. Our courses are carefully crafted to ensure that our learners acquire,
              retain, and apply knowledge effectively.
            </p>

            <p className='flex text-end mt-8'>
              We are a world-class training delivery organization supported by international collaborative 
              synergies for specialized deliveries. We offer courses and certifications through
              various methods such as Classroom training, Corporate bespoke, Online learning,
              Virtual gaming, Blended learning (where applicable), and In-house scheduled approaches.
              We ensure that our training methods are tailored to meet the convenience of our clients.
            </p>
          </div>
        </div>

        <div className='2xl:mx-40 xl:mx-40 lg:mx-40 md:mx-20 mobile:mx-10'>
          <p className='flex text-center mt-8'>
            Our company offers workforce skills enhancement programs that are designed to cater to the learning needs of auditory,
            visual, and kinaesthetic learners on a global scale. We provide outcome measurements and competency
            evaluation for all our training programs. Hommaston’s Promise is “we empower you to perform”
          </p>
        </div>

        <div className='2xl:mx-40  xl:mx-40  lg:mx-40  md:mx-20 mobile:mx-10 my-14 mobile:grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2'>
          <div>
            <p>
              To provide a reputable skills enhancement platform that proficiently
              transforms unskilled resource personnel into invaluable workforce assets.
            </p>
          </div>
          <div className='flex justify-end'>
              <img src={mission} size={20} className='w-40' alt="img" />
          </div>
        </div>

        <div className='2xl:mx-40  xl:mx-40  lg:mx-40  md:mx-20 mobile:mx-10 my-14 mobile:grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2'>

          <div className='flex justify-start'>
              <img src={vission} size={20} className='w-40' alt="img" />
          </div>

          <div>
            <p className='flex text-end'>
              To be the prominent standard in global delivery of qualitative capacity building services.
            </p>
          </div>
          
        </div>

        <div className='2xl:mx-40  xl:mx-40  lg:mx-40  md:mx-20 mobile:mx-10 my-14 mobile:grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2'>
          <div>
            <p>
              Our core value ‘‘WI3N’’ is the embodiment of our organisational culture, definitive of our corporate character and service delivery expectations.
              It is the bedrock reference for interface considerations, our conduct with stakeholders and defines our safety convictions at work.
              These I-Core or I3 are the conveyors for our path to operational excellence and also minimum measure of transparency
              and accountability
              to our esteemed clientele.
            </p>
          </div>
          <div className='flex justify-end'>
              <img src={corevalues} size={20} className='w-80' alt="img" />
          </div>
        </div>

        <div className='text-center mb-12'>
          <button className='text-black border border-gray-700 px-4 rounded-md font-bold'>View Team</button>
        </div>
        
    </div>
  )
}

export default About