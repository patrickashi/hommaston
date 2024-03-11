import React from 'react'
import hommastonlogo from "../assets/hommastonlogo.png";
import hommastonhepburn from "../assets/hommastonhepburn.jpg";


const Secfour = () => {
  return (
    <div className='font-Montserrat'>
        <div className='flex my-6 2xl:mx-28 xl:mx-28 lg:mx-10 md:mx-5 mobile:mx-6 bg-gray-100 rounded-lg shadow-lg shadow-gray-200
         py-14 2xl:px-60 xl:px-80 lg:px-40 md:px-20 mobile:px-4 flex-col items-center justify-center '>
            <div>
                <img src={hommastonlogo} size={20} alt="img" className='' />
            </div>
            <p className='my-6 mobile:text-center 2xl:text-center xl:text-center lg:text-center md:text-center '>
                Hommaston Limited is an indigenous company with a focus on positively impacting capacity development
                goals and delivering quality, cost-effective solutions and services. Our effective management of 
                technical cleaning and maintenance services, as well as the integration of our Hommaston Bio services,
                have resulted in positive environmental impacts for our oil field and hospitality clients. Since 2019,
                we have successfully been deploying technical cleaning and management solutions in partnership with
                Hepburn Bio Care UK Ltd on difficult waste; Waste Oil and Oily water, Food waste and grease oil;
                effluents, and sewage wastewater on Offshore and Onshore locations.
            </p>

            <button className='text-white bg-[#0504AA] rounded-lg px-3 py-1 hover:scale-105 opacity-80 duration-200'>Learn More</button>

        </div>
    </div>
  )
}

export default Secfour