import React from 'react'
import {useState} from "react";

const Faq = () => {
    let [hide, setHide] = useState(true);

    let handleClick = () => {
        setHide = (!hide)
    }


  return (
    <div className='w-full py-8 font-Montserrat h-full bg-black text-white'>
        <div className=''>
            <h1 className='font-bold text-center mobile:text-2xl animate-pulse space-x-4'>FAQ'S</h1>
            <h2 className='text-[#C7C5C5] text-center my-4'> Got Questions?</h2>

            <p className='text-center'>Get the answers to your questions about Hommaston</p>

            <div className='py-4 px-4 bg-white text-[#170F49] 2xl:mx-40 mobile:mx-4 my-4 rounded-2xl
            xl:mx-40 lg:mx-20 md:mx-20 sm:mx-4'>
                <div className='flex justify-between'>
                    <div className='flex '>Do You Offer E-Learning?</div>
                    <button onClick={handleClick} className='flex text-[#6F6C90] text-2xl bg-gray-300 px-4 rounded-lg'> +</button>
                </div>

                <div className={ hide ? "hidden" : "block" }>
                    <p>Lorem ipsum dolor sit.</p>
                </div>

            </div>

            


        </div>
    </div>
  )
}

export default Faq