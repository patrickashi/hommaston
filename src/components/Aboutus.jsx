import React from 'react'
import { FaCircleDot } from "react-icons/fa6";
import "../index.css"

const Aboutus = () => {
  return (
    <div className='2xl:mx-[40px] mobile:ml-5 font-nunito'>
        <div className='mobile:grid 2xl:grid-cols-2'>
            <div className=''>
                <p className='text-[#FF0000] font-bold text-2xl'>About Us</p>
                <p className='font-bold'>One Platform, Countless Benefits</p>
                <div className='flex gap-4 my-4 items-center'>
                    <FaCircleDot className='text-[#FF0000] '/>
                    <p>Our platform connects Participants with world-class instructors around the globe</p>
                </div>
                <div className='flex gap-4 my-4 items-center'>
                    <FaCircleDot className='text-[#FF0000]'/>
                    <p>Cutting-edge online courses in the most in-demand fields</p>
                </div>
                <div className='flex gap-4 my-4 items-center'>
                    <FaCircleDot className='text-[#FF0000]'/>
                    <p>Provision for a personalized and learning experience for every participant</p>
                </div>
                <div className='flex gap-4 my-4 items-center'>
                    <FaCircleDot className='text-[#FF0000]'/>
                    <p>A supportive community of learners and educators, creating a collaborative and enriching learning environment</p>
                </div>

                <button className='text-white bg-[#0504AA] rounded-xl px-3'>LearnMore</button>
            </div>
            <div>
                <img src="" alt="img" />
            </div>
        </div>
    </div>
  )
}

export default Aboutus