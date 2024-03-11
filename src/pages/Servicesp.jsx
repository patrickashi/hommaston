import React from 'react'
import Servicessecone from '../components/Servicessecone';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

import seconepng3 from "../assets/seconepng3.png";
import seconepng2 from "../assets/seconepng2.png";
import seconepng1 from "../assets/seconepng1.png";

const Servicesp = () => {
  return (
    <div className=' h-screen font-Montserrat'>
        <Servicessecone />

        <div className='2xl:mx-40 xl:mx-40 lg:mx-20 md:mx-10 sm:mx-8 mobile:mx-4 pt-20  pb-10
        text-justify'>
{/* 
          <div className='mb-10 text-center'>
            <p className=''>
              Explore Now
            </p>
          </div> */}

          <div className='flex justify-center gap-4 mb-14'>
                <div className='pt-2'>
                    <Link to="/Hommastonbluep">
                        <div className='2xl:text-3xl xl:text-3xl lg:text-3xl  md:text-lg  mobile:text-lg text-center bg-blue-500 2xl:rounded-xl mobile:rounded-lg 2xl:py-4 2xl:px-16 mx-auto text-white
                        mobile:px-6 mobile:py-3 xl:rounded-xl lg:rounded-xl border hover:scale-105 duration-200'>Division Blue</div>
                    </Link>
                </div>

                <div className='pt-2'>
                    <Link to="/Nchcdp">
                        <div className='2xl:text-3xl xl:text-3xl lg:text-3xl  md:text-lg  mobile:text-lg text-center bg-black 2xl:rounded-xl mobile:rounded-lg 2xl:py-4 2xl:px-16 text-white
                        mobile:px-1 mobile:py-3 xl:rounded-xl lg:rounded-xl border hover:scale-105 duration-200'>NC-HCD</div>
                    </Link>
                </div>

                <div className='pt-2 '>
                    <Link to="/Hommastonredp">
                        <div className='2xl:text-3xl xl:text-3xl lg:text-3xl md:text-lg  mobile:text-lg text-center bg-red-500 2xl:rounded-xl mobile:rounded-lg 2xl:py-4 2xl:px-16 text-white
                        mobile:px-6 mobile:py-3 xl:rounded-xl lg:rounded-xl border hover:scale-105 duration-200'>Division Red</div>
                    </Link>
                </div>

          </div>

          <div className='mobile:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 items-center'>

              <div className='flex items-center justify-center mobile:hidden md:block lg:block xl:block 2xl:block'>
                <img src={seconepng3} alt="img" className='' />
              </div>  

              <div className='flex items-center'>
                <p>
                HOMMASTON provides structured On-job training consultancy aimed at enhancing organizational productivity
                 and profitability. As a value-added proposition, we further aid client and organizations in identifying
                  critical competency gaps with respect to personnel performance , evaluate the extent and propose a 
                  structured plan to appropriately address them. We are an organization with a mission to transform
                   non-experienced workforce entrants into invaluable workforce assets for industry. In our approach,
                    we associate our baseline solution to include fresh graduates facing the challenge of non-employment
                     due to the ‘no-experience’ syndrome or the dilemma of a new entrant in result-oriented project teams.
                      We bridge this gap through intensive preparatory courses and live case study structured dummy projects.
                       The key objectives are to optimize trainees’ employment chances by equipping them with appropriate
                        proficiency to competently deliver on live projects with little or average supervision
                </p>
            </div>

            <div className='flex items-center justify-center mobile:block md:hidden lg:hidden xl:hidden 2xl:hidden'>
              <img src={seconepng3} alt="img" />
            </div>

          </div>

          <div className='mobile:grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2'>

            <div className='py-8 items-center'>
              <h1 className='font-bold text-2xl 2xl:text-center xl:text-center lg:text-center md:text-center sm:text-left mobile:text-left mb-4'>Why Choose Us?</h1>

              <p>
                <span className='font-bold'>Unparalleled Expertise:</span> With years of experience in the industry, our team of seasoned professionals 
                possesses the knowledge and skill to deliver comprehensive training programs tailored to your specific needs.
              </p>

              <p className='my-4'>
                <span className='font-bold'>Cutting-edge Curriculum:</span> Our training modules are thoughtfully designed, incorporating the latest industry trends
                and best practices. We equip our trainees with the knowledge and hands-on experience required to excel in their respective fields.
              </p>
              <p className='my-4'>
                <span className='font-bold'>Practical Training Approach:</span> Hommaston Limited believes in learning by doing. Our practical approach to training allows participants
                to grasp concepts efficiently and implement them effectively.
              </p>
              <p className='my-4'> 
                <span className='font-bold'>Top-notch Facilities:</span> To ensure an optimal learning environment, we boast state-of-the-art facilities equipped with modern technology
                and resources to support our trainees' growth.
              </p>
              <p className='my-4'>
                <span className='font-bold'>Dedicated Faculty:</span> Our instructors are not only subject matter experts but also passionate mentors committed to guiding our trainees
                throughout their learning journey.
              </p>
              <p >
                <span className='font-bold'>Industry Partnerships:</span> We have established strong partnerships with leading companies in various industries, providing our
                trainees with access to potential employment opportunities.
              </p>
            </div>

            <div className='flex items-center justify-center'>
              <img src={seconepng2} alt="img" />
            </div>

          </div>

          <div className='mobile:grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 items-center'>

              <div className='flex items-center justify-center mobile:hidden md:block lg:block xl:block 2xl:block '>
                <img src={seconepng1} alt="img" />
              </div>

              <div>
                <h1 className='font-bold text-2xl 2xl:text-center xl:text-center lg:text-center md:text-center sm:text-left mobile:text-left mb-4'>Our Services</h1>

                <p> 
                  <span className='font-bold'>Skills Development:</span> Whether you're an individual seeking to enhance your skillset 
                  or an organization looking to upskill your workforce, we offer a wide range of skill 
                  development programs that cater to diverse industries.
                </p>
                <p className='my-4'>
                  <span className='font-bold'>Manpower Training:</span> At Hommaston Limited, we understand the significance of skilled manpower
                  for business growth. Our specialized training for manpower development ensures your employees
                  are competent and productive.
                </p>
                <p>
                  <span className='font-bold'>Customized Corporate Training:</span> We provide tailored corporate training solutions to address the unique
                  requirements of your organization. Our programs are designed to align with your
                  goals and enhance overall productivity.
                </p>
                <p className='my-4'>
                  <span className='font-bold'>Career Guidance:</span> Our support doesn't end with training. We offer comprehensive career guidance and
                  counseling to help our trainees navigate their professional paths successfully.
                </p>
                <p>
                  <span className='font-bold'>Job Placement Assistance:</span> As a dedicated training and development company, we take pride in assisting
                  our trainees in finding suitable employment opportunities in their respective fields.
                </p>
              </div>
          </div>

          <div className='flex items-center justify-center mobile:block md:hidden lg:hidden xl:hidden 2xl:hidden '>
              <img src={seconepng1} alt="img"  />
          </div>  

        </div>

              
        <Footer />
    </div>
  )
}

export default Servicesp





















