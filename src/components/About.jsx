import React from 'react'
import { Link } from "react-router-dom";
import contactpimg from "../assets/contactpimg.jpg";
import hommastonashlogo from "../assets/hommastonashlogo.png";


import aboutimg1 from "../assets/aboutimg1.jpg";
import aboutimg2 from "../assets/aboutimg2.jpg";
import aboutimg3 from "../assets/aboutimg3.jpg";
import aboutimg5 from "../assets/aboutimg5.jpg";


const About = () => {
  return (
    <div className='font-Montserrat'>
         <div className='relative w-full h-[300px] bg-cover bg-center' style={{ backgroundImage: `url(${contactpimg})` }}>
                <div className='absolute 2xl:mt-[256px] mobile:mt-[264px] mx-auto border-2 flex justify-center 
                xl:mt-[256px] lg:mt-[256px] md:mt-[264px] sm:mt-[264px] items-center inset-x-0 bg-neutral-50/70
                2xl:mx-20 mobile:mx-5 rounded-2xl shadow-md shadow-violet-400'>
                    <h1 className='2xl:text-5xl xl:text-5xl lg:text-5xl mobile:text-3xl py-4 font-bold 2xl:text-gray-700
                    mobile:text-gray-600  text-center rounded-full'>About Us</h1>
                </div>
          </div>

        <div className='py-16 mt-10 2xl:mx-40 xl:mx-20 lg:mx-6 md:mx-6 sm:mx-4 mobile:mx-4'>

          <div className=' grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 2xl:mx-20 xl:mx-20 lg:mx-6 md:mx-6 mobile:mx-4'>
          
            <div className='flex flex-col justify-center'>
              <p className='flex 2xl:text-start xl:text-start lg:text-start md:text-start mobile:text-center mt-2'>
                Hommaston operates two core divisions. Red Division (Hommaston Engineering) focal delivery of choice skillsets for design engineering, facility maintenance and operations 
                supports competency and performance.  Blue division (Hommaston Digital) handles human capital development, drone tech, cloud computing, corporate soft skills and all other 
                non-engineering, certification preparatory courses.
              </p>

              <p className='flex 2xl:text-start xl:text-start lg:text-start md:text-start mobile:text-center mt-8'>
                At Our Training Facilities, we prioritize creating a conducive learning environment that promotes comfort and enhances 
                the learning experience. Our courses are carefully crafted to ensure that our learners acquire, retain, and apply 
                knowledge effectively.
              </p>
            </div>

            <div className='flex 2xl:justify-end xl:justify-end lg:justify-end mobile:justify-center md:w-full mobile:my-20 2xl:my-10 '>
              <img src={hommastonashlogo} size={20} className='w-80' alt="img" />
            </div>
        </div>

          <div className='my-8 2xl:mx-20 xl:mx-20 lg:mx-6 md:mx-2 mobile:mx-4'>
            <h1 className='text-2xl text-center font-bold'>Training Gallery</h1>

            
            <marquee className="image-container border-x ">
              <div className='flex mobile:flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row gap-4 my-12'>

                <div className=''>
                  <img src={aboutimg1} size={20} className='object-cover 2xl:w-80 rounded-lg' alt="img" />
                </div>
                <div className=''>
                  <img src={aboutimg1} size={20} className='object-cover 2xl:w-80 rounded-lg' alt="img" />
                </div>
                <div className=''>
                  <img src={aboutimg1} size={20} className='object-cover 2xl:w-80 rounded-lg' alt="img" />
                </div>
                <div className=''>
                  <img src={aboutimg1} size={20} className='object-cover 2xl:w-80 rounded-lg' alt="img" />
                </div>
                <div className=''>
                  <img src={aboutimg1} size={20} className='object-cover 2xl:w-80 rounded-lg' alt="img" />
                </div>

              </div>
            </marquee>

          </div>

        </div>

        <div className='2xl:mx-60  xl:mx-40  lg:mx-14  md:mx-6 mobile:mx-4 my-14 mobile:grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2
        border-b pb-4'>

          <div className='flex 2xl:justify-center lg:justify-center xl:justify-center md:justify-center mobile:justify-start
          mobile:mb-4 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0'>
              <img src={aboutimg1} size={20} className='object-cover rounded-lg' alt="img" />
          </div>

          <div className=' items-center'>
            <h1 className='2xl:text-end md:text-end lg:text-end xl:text-end mobile:text-start font-bold text-2xl mb-4'>More About Us</h1>
            <p className='flex 2xl:text-end xl:text-end lg:text-end md:text-end mobile:text-start'>
              We are a world-class training delivery organization supported by international collaborative synergies for
              specialized deliveries. We offer courses and certifications through various methods such as Classroom training,
              Corporate bespoke, Online learning, Virtual gaming, Blended learning (where applicable), and In-house scheduled
              approaches. We ensure that our training methods are tailored to meet the convenience of our clients.
            </p>
            <p className='flex 2xl:text-end xl:text-end lg:text-end md:text-end mobile:text-start mt-6'>
              Our company offers workforce skills enhancement programs that are designed to cater to the learning 
              needs of auditory, visual, and kinaesthetic learners on a global scale. We provide outcome measurements
              and competency evaluation for all our training programs. Hommaston’s promise is “we empower you to perform”
            </p>
          </div>
          
        </div>

        

        <div className='2xl:mx-60  xl:mx-40  lg:mx-14  md:mx-6 mobile:mx-4 my-14 mobile:grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2
        border-b pb-6'>
          <div className='flex 2xl:justify-center xl:justify-center lg:justify-center md:justify-center mobile:justify-end mobile:block 2xl:hidden xl:hidden lg:hidden md:hidden
          mobile:mb-4 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0'>
              <img src={aboutimg5} size={20} className='rounded-lg' alt="img" />
          </div>

          <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-2xl mb-4'>Our Mission</h1>
            <p>
              To provide a reputable skills enhancement platform that proficiently
              transforms unskilled resource personnel into invaluable workforce assets.
            </p>
          </div>
          <div className='flex 2xl:justify-center xl:justify-center lg:justify-center md:justify-center mobile:justify-end mobile:hidden 2xl:block xl:block lg:block md:block'>
              <img src={aboutimg5} size={20} className='rounded-lg' alt="img" />
          </div>
        </div>

        <div className='2xl:mx-60  xl:mx-40  lg:mx-14  md:mx-6 mobile:mx-4 my-14 mobile:grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2
        border-b pb-4'>

          <div className='flex 2xl:justify-center lg:justify-center xl:justify-center md:justify-center mobile:justify-start
          mobile:mb-4 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0'>
              <img src={aboutimg2} size={20} className='rounded-lg' alt="img" />
          </div>

          <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-2xl mb-4 2xl:text-end xl:text-end lg:text-end md:text-end sm:text-start'>Our Vision</h1>
            <p className='flex 2xl:text-end xl:text-end lg:text-end md:text-end mobile:text-start'>
              To be the prominent standard in global delivery of qualitative capacity building services.
            </p>
          </div>
          
        </div>

        <div className='2xl:mx-60  xl:mx-40  lg:mx-14  md:mx-6 mobile:mx-4 my-14 mobile:grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2
        border-b pb-6'>
          <div className='flex justify-center items-center mobile:block 2xl:hidden xl:hidden lg:hidden md:hidden
          mb-4'>
              <img src={aboutimg3} size={20} className='rounded-lg' alt="img" />
          </div>

          <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-2xl mb-4'>Our Core Values</h1>
            <p>
            Our core value ‘‘WI3N’’ is the embodiment of our organizational culture, definitive of our corporate character and
             service delivery expectations. It is the bedrock reference for interface considerations, our conduct with stakeholders
              and defines our safety convictions at work. These I-Core or I3 are the conveyors for our path to operational
               excellence and  measure of transparency and accountability to our esteemed clientele.
            </p>
          </div>
          <div className='flex 2xl:justify-center xl:justify-center lg:justify-center md:justify-center mobile:justify-end mobile:hidden 2xl:block xl:block lg:block md:block'>
              <img src={aboutimg3} size={20} className='rounded-lg' alt="img" />
          </div>
        </div>

        <div className='text-center mb-12'>
          <Link to="/Ourteamp">
            <button className='text-black border border-gray-700 px-4 rounded-md font-bold hover:scale-105 duration-200 hover:bg-black hover:text-white'>View Team</button>
          </Link>
        </div>
        
    </div>
  )
}

export default About