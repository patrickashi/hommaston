// import { Send } from '@material-ui/icons'
import React from 'react'
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <div className='flex justify-center items-center w-[100%] flex-col text-white py-16 bg-black font-Montserrat border-b border-gray-700'>
        <h1 className='text-[50px] font-bold'>NEWSLETTER</h1>
        <h2 className='text-[20px] mt-2 mobile:p-3 mobile:text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
        <div className='flex mt-[3rem] items-center justify-between min-w-[30rem] min-h-[2rem] bg-white rounded-md border-[#cccccc]
         overflow-hidden mobile:min-w-[20rem]'>
            <input type="email" placeholder='email' className='flex-[7] pl-[20px] border-none outline-none'/>
            <button className='bg-[#0504AA] flex-1 h-[33px]'>
                {/* <Send className='text-white'/> */}
                <p className='text-white'>send</p>
            </button>
        </div>
    </div>
  )
}

export default Newsletter