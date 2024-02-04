import React from 'react'
import sponge from "../assets/sponge.gif"

const Secone = () => {
  return (
    <div className='w-full py-[30px] font-nunito'>
        <div className='mobile:grid 2xl:grid-cols-2 mx-[40px] mobile:mx-0'>
            <div className='2xl:mx-[40px] mobile:ml-4 2xl:py-8'>
                <p className='2xl:text-[50px] 2xl:py-4 mobile:text-[25px] '>Up Your <span className='text-[#0504AA]'> Skills </span> 
                to <span className='text-[#0504AA]'>advance</span> your 
                </p>
                <p className='2xl:text-[50px] 2xl:py-4 mobile:text-xl' ><span className='text-[#0504AA]'>career</span>  path..</p>

                <p className='my-5'>Share your Experience through Hommaston</p>
                <button className='bg-[#ED1C24] text-white rounded-2xl px-4 py-1'>Explore Courses</button>

                <div className='flex mt-10 gap-[-4px]'>
                  <div className='bg-[#ED1C24] rounded-full py-2 px-5 '></div>
                  <div className='bg-[#ED1C24] rounded-full py-2 px-5 pl-[-2px]'></div>
                  <div className='bg-[#ED1C24] rounded-full py-2 px-5'></div>
                  <div className='bg-[#ED1C24] rounded-full py-2 px-[6px] text-white'>+20 </div> <span className='flex items-center ml-2 text-[#808080]'>Experts Worldwide</span>
                </div>
            </div>
            <div>
              <img src={sponge} alt="img" className='w-80' />
            </div>
        </div>
    </div>
  )
}

export default Secone