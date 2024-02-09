import React from 'react';
import classroomedit from "../assets/classroomedit.jpg";

const Servicessecone = () => {
  return (
    <div className='font-Montserrat'>
        <div className='relative w-full h-[300px] bg-cover bg-center' style={{ backgroundImage: `url(${classroomedit})` }}>
            {/* <img src={classroomedit} alt="" className='h-full w-full object-cover' /> */}
            <div className='abosolute pt-10 2xl:px-[400px] xl:px-[400px] lg:px-[200px] mobile:px-20 rounded-md'>
                <div className='text-4xl text-center bg-white/50 text-[#292D32] py-10 rounded-xl'>Services</div>
            </div>
            
            <div className='absolute flex flex-row 2xl:gap-20 mobile:gap-6 items-center justify-center mt-6 2xl:ml-[440px]
             mobile:ml-4 xl:ml-[440px] lg:ml-[300px] md:ml-[300px] sm:ml-[100px]'>
                <div className='pt-2'>
                    <div className='2xl:text-4xl xl:text-4xl lg:text-3xl mobile:text-md text-center bg-white 2xl:rounded-[100px] mobile:rounded-lg 2xl:py-4 2xl:px-16 mx-auto text-[#292D32]
                    mobile:px-6 mobile:py-3 xl:rounded-[100px] lg:rounded-[100px]'>Division Blue</div>
                </div>

                <div className='pt-2'>
                    <div className='2xl:text-4xl xl:text-4xl lg:text-3xl  mobile:text-md text-center bg-white 2xl:rounded-[100px] mobile:rounded-lg 2xl:py-4 2xl:px-16 text-[#292D32]
                    mobile:px-6 mobile:py-3 xl:rounded-[100px] lg:rounded-[100px]'>Division Red</div>
                </div>

               
                
            </div>
        </div>
    </div>
  )
}

export default Servicessecone