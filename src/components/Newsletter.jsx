// import { Send } from '@material-ui/icons'
import React from 'react'
import { Link } from "react-router-dom";
import blackgradient from "../assets/blackgradient.jpg";
import Emailform from './Emailform';

const Newsletter = () => {
  return (
    <div className='flex justify-center items-center w-[100%] flex-col text-white py-16 bg-cover bg-center font-Montserrat'
    style={{ backgroundImage:  `url(${blackgradient})` }}>
        <h1 className='2xl:text-4xl mobile:text-3xl text-center font-bold'>Join Our Learning Community</h1>
        <h2 className='text-xl mt-2 mobile:p-3 mobile:text-center 2xl:w-[1000px]'>Stay Connected with fellow learners and Instructors by subscribing to our newsletter. 
            Get the latest update and be a part of our growing community</h2>

        <Emailform />
    </div>
  )
}

export default Newsletter