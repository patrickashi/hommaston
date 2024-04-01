import React from 'react'
import hepburn1 from "../assets/hepburn1.png";
import { Link } from "react-router-dom";


const Secfour = () => {
  return (
    <div className='font-Montserrat'>
        <div className='flex my-6 2xl:mx-28 xl:mx-28 lg:mx-10 md:mx-5 mobile:mx-6 bg-gray-100 rounded-lg shadow-lg shadow-gray-200
         py-14 2xl:px-60 xl:px-40 lg:px-40 md:px-20 mobile:px-4 flex-col items-center justify-center '>
            <div>
                <img src={hepburn1} size={20} alt="img" className='w-80' />
            </div>
            <p className='my-6 mobile:text-center 2xl:text-justify xl:text-justify lg:text-justify md:text-justify '>
              At Hommaston Limited, we specialize in two key areas: training and capacity building, and environmentally conscious solutions through our Hommaston Bio services. we are dedicated to enhancing capacity development and delivering top-quality, cost- effective solutions and services. This includes comprehensive training and capacity
              building programs tailored to empower individuals and organizations across various
              industries.
            </p>

            <p className='my-6 mobile:text-center 2xl:text-justify xl:text-justify lg:text-justify md:text-justify '>
              Our training arm collaborates with subject matter experts and institutions globally,
              including South Africa, the United Kingdom, Australia, the United States, India, and
              China. This international synergy ensures our clients receive cutting-edge expertise and
              best practices from around the world.
            </p>

            <p className='my-6 mobile:text-center 2xl:text-justify xl:text-justify lg:text-justify md:text-justify '>
              We also offer innovative environmental solutions through our Hommaston Bio services. With a focus on sustainability, we provide effective management of technical cleaning
              and maintenance services, prioritizing environmental conservation and client satisfaction. Through our partnership with Hepburn Bio Care UK Ltd, we excel in managing
              challenging waste streams such as waste oil, oily water, food waste, grease oil, effluents, and sewage wastewater across offshore and onshore locations. By prioritizing both training and environmentally conscious solutions, Hommaston
              Limited remains committed to driving positive change and exceeding client expectations
              in the oil field and hospitality sectors
            </p>

            <Link to="/Aboutusp">
              <button className='text-white bg-[#0504AA] rounded-lg px-3 py-1 hover:scale-105 opacity-80 duration-200'>Learn More</button>
            </Link>
            

        </div>
    </div>
  )
}

export default Secfour