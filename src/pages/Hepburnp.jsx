import React from 'react'
import hepburnpic from "../assets/hepburnpic.jpg";
import hepheroearth from "../assets/hepheroearth.png";
import plantingtrees from "../assets/plantingtrees.jpg";
import hebbb from "../assets/hebbb.png";
import Footer from '../components/Footer';

const Hepburnp = () => {
  return (
    <div className='font-Montserrat'>
        <div className='relative w-full h-[300px] bg-cover bg-center' style={{ backgroundImage: `url(${hepburnpic})` }}>
            {/* <img src={hepburnpic}  alt="img" size={20} className='h-full w-full object-cover z-0' /> */}
            <div className='absolute 2xl:mt-[250px] mobile:mt-[250px] mx-auto border-2 flex justify-center 
            xl:mt-[250px] lg:mt-[250px] md:mt-[250px] sm:mt-[250px] items-center inset-x-0 bg-gray-700/20
            2xl:mx-20 mobile:mx-5 rounded-[300px] shadow-md shadow-violet-400'>
                <h1 className='2xl:text-5xl xl:text-5xl lg:text-5xl mobile:text-3xl py-4 font-bold 2xl:text-gray-700
                mobile:text-gray-600 bg-neutral-50/70 w-full text-center rounded-full'>HepBurn</h1>
            </div>
        </div>

        {/* section1 */}
        <div className='mobile:grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid sm:grid mt-20 2xl:mx-[200px]
         xl:mx-20 lg:mx-15 md:mx-4 sm:mx-4 mobile:mx-4'>
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

          <div className='flex justify-center 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-6 mobile:mt-6'>
            <img src={hepheroearth} size={20} alt="img" className='h-100px w-full ' />
          </div>

        </div>

        {/* section2 */}
        <div className='mobile:grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid my-12
        2xl:mx-[200px] xl:mx-20 lg:mx-15 md:mx-4 sm:mx-4 mobile:mx-4 gap-4'>

            <div className='flex items-center justify-center'>
              <img src={plantingtrees} alt="img" className='h-full object-cover'/>
            </div>

            <div className='2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2'>
              <p>
                  Our solution achieves three, 3, key things: Breakup of difficult and caked concentrated formulations
                  of sewage in sewage pits - an anaerobic pit, improved biological wastewater parameters in-line with
                  international standards, and elimination of smells due to anaerobic combined suck-away pits. Also,
                  the effective breakup of anaerobic and oily sludge, into soluble waste effluent has resulted in more
                  effective management of these types of effluent.
              </p>
              <p className='my-4'>
                Our list of satisfactory clients since endeavoring to tackle this hydra head challenging environmental
                state of waste control effluent in include:
              </p>

              <h1 className='font-bold mt-4 mb-2'>CHEVRON NIGERIA LIMITED; SNEPCO and recently TOTAL ENERGIES.</h1>

              <p className='mb-4'>
                Outside the Oil and Gas sector we are aiding better management of sewage wastewater and toxic food wastewater
                in the hospitality sector. 
              </p>

              <p>
                Our clientele includes; EKO HOTEL &SUITES, IKOYI CLUB 1938 SAHARA ENERGY, AFRICAN CIRCLE POLLUTION MANAGEMENT
                and several Fast-food establishments that are in evaluation stages of deployment
              </p>
            </div>
        </div>

        {/* section3 */}
        <div className='mobile:grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid my-12
        2xl:mx-[200px] xl:mx-20 lg:mx-15 md:mx-4 sm:mx-4 mobile:mx-4 gap-4'>

          <div className='2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2'>
            <p>
              Hommaston now seeks to align in Lagos with the Holistic deployment of its licensed range of Hepburn 
              Bio Care chemical products as a SUSTAINABLE SOLUTION FOR WASTEWATER MANAGEMENT. By tackling the familiar 
              challenge of Sewage Wastewater and produced biological sewage effluents at the source, Hepburn Bio Care 
              has established records of effective results in the most stringent environments, the marine and offshore
              environments, where her products have contributed mainly to positively impacting the environment. Hommaston 
              has proven this in-country with the effective breakdown of all naturally occurring forms of biological
              effluents in closed Wastewater Treatment, WWT systems such as Sewage treatment plants, STPs, Septic Tanks,
              and AWPS in the Nigerian Territory.
            </p>
          </div>

          <div className='flex items-center justify-center'>
              <img src={hebbb} alt="img" className='h-full object-cover' />
          </div>
        </div>

        <Footer />


    </div>
  )
}

export default Hepburnp