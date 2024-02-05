import React from 'react'
import hommastonlogo from "../assets/hommastonlogo.png"
import hommastonhepburn from "../assets/hommastonhepburn.jpg";


const Secfour = () => {
  return (
    <div>
        <div className='flex bg-gray-300 my-6 2xl:mx-20 xl:mx-20 lg:mx-20 mobile:mx-2 mobile:rounded-lg 2xl:rounded-full xl:rounded-full lg:rounded-full
        md:rounded-full py-4 2xl:px-20 xl:px-20 lg:px-20 md:px-20 mobile:px-4 flex-col items-center justify-center border-4 border-[#178F04]'>
            <div>
                <img src={hommastonlogo} size={20} alt="img" className='' />
            </div>
            <p className='my-6 flex justify-center'>
                Hommaston Limited is an Indegenous company, with a focus to positively impact capacity development goals and 
                to deliver quality cost-effective solutions and services. Our effective management of technical cleaning and  
                maintenance services, as well as the integration of our Hommaston Bio services, have resulted in positive
                environmental impacts for our Oil Field and Hospitality clients. Since 2019 we have successfully been deploying
                technical cleaning and management solution in partnership Hepburn Bio Care UK Ltd on difficult waste; Waste Oil 
                and Oily Water; Food waste and grease oil Effluents and sewage Wasewater on Offshore and Onshore locations.
            </p>

            <button className='text-white bg-[#0504AA] rounded-xl px-3 py-1'>Learn More</button>

        </div>
    </div>
  )
}

export default Secfour