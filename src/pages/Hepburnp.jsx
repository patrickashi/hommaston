import React from 'react'
import hepburnpic from "../assets/hepburnpic.jpg";
import tower from "../assets/tower.png";

const Hepburnp = () => {
  return (
    <div className='font-Montserrat'>
        <div className='relative w-full h-[300px] bg-cover bg-center' style={{ backgroundImage: `url(${hepburnpic})` }}>
            {/* <img src={hepburnpic}  alt="img" size={20} className='h-full w-full object-cover z-0' /> */}
            <div className='absolute 2xl:mt-[250px] mobile:mt-[250px] mx-auto border-2 flex justify-center 
            xl:mt-[250px] lg:mt-[250px] md:mt-[250px] sm:mt-[250px] items-center inset-x-0 bg-gray-700/20
            2xl:mx-20 mobile:mx-5 rounded-[300px] shadow-md shadow-violet-400'>
                <h1 className='2xl:text-6xl xl:text-6xl lg:text-6xl mobile:text-3xl py-4 font-bold 2xl:text-gray-700
                mobile:text-gray-600 bg-neutral-50/70 w-full text-center rounded-full'>HepBurn</h1>
            </div>
        </div>

        <div className='mobile:grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid mt-20 2xl:mx-20
         xl:mx-20 lg:mx-15 md:mx-10 sm:mx-5 mobile:mx-4'>
          <div>
            <p>
              Hommaston Limited is an indigenous company, with a focus to positively impact capacity development goals
              and to deliver quality cost-effective solutions and services. Our effective management of technical 
              cleaning and maintenance services, as well as the integration of our Hommaston Bio services, have resulted
              in positive environmental impacts for our Oil Field and Hospitality clients.
            </p>

            <p className='py-4'>
              Since 2019 we have successfully been deploying technical cleaning and management solution in partnership Hepburn
              Bio Care UK Ltd on difficult waste; Waste Oil and Oily Water; Food Waste and Grease Oil Effluents and Sewage
              Wastewater on Offshore and Onshore locations. Our exposure to varying degrees of these waste stream 
              over the years has placed our services in an enviable place with proffering solutions using a unique
              range of Hepburn Bio Care technical cleaning products.
            </p>

            <p>
              Hepburn Bio Care UK Ltd is the leading manufacturer and supplier of environmental, super concentrated phosphate-free,
              non-toxic products for interior and technical cleaning, grey/black water line maintenance/cleaning, and treatment
              of organic wastewater. Hommaston is the sole distributor of Hepburn Bio Care products in Nigeria, Licenced to 
              Import and Market Hepburn products in the Nigerian Territory by NAFDAC and the ONLY registered and approved 
              company with the NUPRC to deploy Hepburn Product in the Nigerian Oil & Gas Sector.
            </p>
          </div>
          <div>
            <img src={tower} size={20} alt="img" className='h-100px w-[500px]' />
          </div>
        </div>


    </div>
  )
}

export default Hepburnp