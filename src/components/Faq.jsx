import React from 'react'
import {useState} from "react";
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";

const Faq = () => {
    let [hide, setHide] = useState(true);
    let [hideSecond, setHideSecond] = useState(true);
    let [hideThird, setHideThird] = useState(true);
    let [hideFourth, setHideFourth] = useState(true);
    let [hideFifth, setHideFifth] = useState(true);
    let [hideSixth, setHideSixt] = useState(true);
    let [hideSeventh, setHideSeventh] = useState(true);
    let [hideEight, setHideEight] = useState(true);

    let handleClick = () => {
        setHide(!hide);
    };

    let handleClickSecond =() => {
        setHideSecond(!hideSecond);
    };
    let handleClickThird =() => {
        setHideThird(!hideThird);
    };
    let handleClickFourth =() => {
        setHideFourth(!hideFourth);
    };
    let handleClickFifth =() => {
        setHideFifth(!hideFifth);
    };
    let handleClickSixth =() => {
        setHideSixt(!hideSixth);
    };
    let handleClickSeventh=() => {
        setHideSeventh(!hideSeventh);
    };
    let handleClickEight=() => {
        setHideEight(!hideEight);
    };


  return (
    <div className='w-full py-8 font-Montserrat h-full bg-black text-white'>
        <div className=''>
            <h1 className='font-bold text-center 2xl:text-4xl xl:text-4xl mobile:text-2xl animate-pulse space-x-4'>FAQ'S</h1>
            <h2 className='text-[#C7C5C5] text-center my-4'> Got Questions?</h2>

            <p className='text-center'>Get the answers to your questions about Hommaston</p>

            <div className='py-2 px-4 bg-white text-[#170F49] 2xl:mx-80 lg:mx-20 mobile:mx-4 my-4 rounded-2xl
            xl:mx-80 md:mx-20 sm:mx-4'>
                <div className='flex justify-between '>
                    <div className='flex font-bold'>Do You Offer E-Learning?</div>
                    <button onClick={handleClick} className={ hide ?  '' : ""}>
                        { hide ? <FiPlus className='text-[#6F6C90] text-lg bg-gray-300 rounded-lg' size={40}/> : <LuMinus className='bg-[#4A3AFF] rounded-lg text-white' size={40}/>}
                    </button>
                </div>

                <div className={ hide ? "hidden" : "block" }>
                    <p>
                        Yes, we allow our participants to take courses at their own pace and schedule
                    </p>
                </div>

            </div>

            <div className='py-2 px-4 bg-white text-[#170F49] 2xl:mx-80 lg:mx-20 mobile:mx-4 my-4 rounded-2xl
            xl:mx-80 md:mx-20 sm:mx-4'>
                <div className='flex justify-between'>
                    <div className='flex font-bold'>Can I Pay For Course Online Using My Credit Card?</div>
                    <button onClick={handleClickSecond}>
                        { hideSecond ? <FiPlus className='text-[#6F6C90] text-lg bg-gray-300 rounded-lg' size={40}/> : <LuMinus className='bg-[#4A3AFF] rounded-lg text-white' size={40}/>}
                    </button>
                </div>

                <div className={ hideSecond ? "hidden" : "block" }>
                    <p>Using our payment gateway, you can pay easily for any online course.</p>
                </div>

            </div>

            <div className='py-2 px-4 bg-white text-[#170F49] 2xl:mx-80 mobile:mx-4 my-4 rounded-2xl
            xl:mx-80 lg:mx-20 md:mx-20 sm:mx-4'>
                <div className='flex justify-between'>
                    <div className='flex font-bold'>Is Hommaston Limited On Social Media?</div>
                    <button onClick={handleClickThird} className={ hide ?  '' : ""}>
                        { hideThird ? <FiPlus className='text-[#6F6C90] text-lg bg-gray-300 rounded-lg' size={40}/> : <LuMinus className='bg-[#4A3AFF] rounded-lg text-white' size={40}/>}
                    </button>
                </div>

                <div className={ hideThird ? "hidden" : "block" }>
                    <p> Hommaston is on all social media platforms</p>
                </div>

            </div>

            <div className='py-2 px-4 bg-white text-[#170F49] 2xl:mx-80 mobile:mx-4 my-4 rounded-2xl
            xl:mx-80 lg:mx-20 md:mx-20 sm:mx-4'>
                <div className='flex justify-between'>
                    <div className='flex font-bold'>What Payment Method Or Form Do You Accept?</div>
                    <button onClick={handleClickFourth} className={ hide ?  '' : ""}>
                        { hideFourth ? <FiPlus className='text-[#6F6C90] text-lg bg-gray-300 rounded-lg' size={40}/> : <LuMinus className='bg-[#4A3AFF] rounded-lg text-white' size={40}/>}
                    </button>
                </div>

                <div className={ hideFourth ? "hidden" : "block" }>
                    <p> We accept credit cards and bank transfers.</p>
                </div>

            </div>

            <div className='py-2 px-4 bg-white text-[#170F49] 2xl:mx-80 mobile:mx-4 my-4 rounded-2xl
            xl:mx-80 lg:mx-20 md:mx-20 sm:mx-4'>
                <div className='flex justify-between'>
                    <div className='flex font-bold'>Are All Hommaston Courses Certified?</div>
                    <button onClick={handleClickFifth} className={ hide ?  '' : ""}>
                        { hideFifth ? <FiPlus className='text-[#6F6C90] text-lg bg-gray-300 rounded-lg' size={40}/> : <LuMinus className='bg-[#4A3AFF] rounded-lg text-white' size={40}/>}
                    </button>
                </div>

                <div className={ hideFifth ? "hidden" : "block" }>
                    <p>Hommaston is Learning performance institute and American council of training and
                        development accredit</p>
                </div>

            </div>

            <div className='py-2 px-4 bg-white text-[#170F49] 2xl:mx-80 mobile:mx-4 my-4 rounded-2xl
            xl:mx-80 lg:mx-20 md:mx-20 sm:mx-4'>
                <div className='flex justify-between'>
                    <div className='flex font-bold'>Where Does the Training Take Place?</div>
                    <button onClick={handleClickSixth} className={ hide ?  '' : ""}>
                        { hideSixth ? <FiPlus className='text-[#6F6C90] text-lg bg-gray-300 rounded-lg' size={40}/> : <LuMinus className='bg-[#4A3AFF] rounded-lg text-white' size={40}/>}
                    </button>
                </div>

                <div className={ hideSixth ? "hidden" : "block" }>
                    <p>Hommaston does onsite, in-house, and online training</p>
                </div>

            </div>

            <div className='py-2 px-4 bg-white text-[#170F49] 2xl:mx-80 mobile:mx-4 my-4 rounded-2xl
            xl:mx-80 lg:mx-20 md:mx-20 sm:mx-4'>
                <div className='flex justify-between'>
                    <div className='flex font-bold'>What Is the Mode Of Training?</div>
                    <button onClick={handleClickSeventh} className={ hide ?  '' : ""}>
                        { hideSeventh ? <FiPlus className='text-[#6F6C90] text-lg bg-gray-300 rounded-lg' size={40}/> : <LuMinus className='bg-[#4A3AFF] rounded-lg text-white' size={40}/>}
                    </button>
                </div>

                <div className={ hideSeventh ? "hidden" : "block" }>
                    <p>Hommaston does online, physical, and blended training</p>
                </div>

            </div>

            <div className='py-2 px-4 bg-white text-[#170F49] 2xl:mx-80 mobile:mx-4 my-4 rounded-2xl
            xl:mx-80 lg:mx-20 md:mx-20 sm:mx-4'>
                <div className='flex justify-between'>
                    <div className='flex font-bold'>How Do You Measure Attendee Satisfaction?</div>
                    <button onClick={handleClickEight} className={ hide ?  '' : ""}>
                        { hideEight ? <FiPlus className='text-[#6F6C90] text-lg bg-gray-300 rounded-lg' size={40}/> : <LuMinus className='bg-[#4A3AFF] rounded-lg text-white' size={40}/>}
                    </button>
                </div>

                <div className={ hideEight ? "hidden" : "block" }>
                    <p>Hommaston issues feedback form to measure attendees’ satisfaction</p>
                </div>

            </div>

            


        </div>
    </div>
  )
}

export default Faq