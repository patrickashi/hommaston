import React, { useState } from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";
import fcdesign from "../assets/fcdesign.jpg";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import bg1 from "../assets/bg1.jpg";

import { MdArrowBackIosNew } from "react-icons/md";
import Footer from '../components/Footer';

const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : null;
};

const Nchcdp = () => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        companyname: '',
        companyemail: '',
        phonenumber: '',
        otherinfo: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const csrftoken = getCookie('csrftoken');

        // Include CSRF token in request headers
        const headers = {
            'X-CSRFToken': csrftoken,
            'Content-Type': 'application/json'
        };

        try {
            // const csrfToken = getCsrfToken();
            // axios.defaults.headers.common['X-CSRFToken'] = csrfToken;

            await axios.post('https://patrickpeko.pythonanywhere.com/api/nchcd_submission/', formData, { headers });

            alert('Form submitted successfully!');
            setFormData({
                firstname: '',
                lastname: '',
                companyname: '',
                companyemail: '',
                phonenumber: '',
                otherinfo: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form. Please try again.');
        }
    };

    const getCsrfToken = () => {
        const cookieValue = document.cookie.match(/csrftoken=([^ ;]+)/);
        return cookieValue ? cookieValue[1] : null;
    };


  return (
    <div className='font-Montserrat'>
        <div className='relative w-full h-[300px] bg-cover bg-center' style={{ backgroundImage: `url(${fcdesign})` }}>
            {/* <img src={hepburnpic}  alt="img" size={20} className='h-full w-full object-cover z-0' /> */}
            <div className='absolute 2xl:mt-[255px] mobile:mt-[265px] mx-auto border-2 flex justify-center 
            xl:mt-[255px] lg:mt-[255px] md:mt-[265px] sm:mt-[265px] items-center inset-x-0 bg-neutral-50/70
            2xl:mx-20 mobile:mx-5 rounded-xl shadow-md shadow-violet-400'>
                <Link to="/Servicesp"> <MdArrowBackIosNew className='mr-3 rounded-md bg-gray-100 w-10 '/> </Link>
                <h1 className='2xl:text-5xl xl:text-5xl lg:text-5xl sm:text-2xl mobile:text-2xl py-4 font-bold 2xl:text-[#0504AA]
                mobile:text-[#0504AA]  text-center rounded-full'>NC-HCD Cunsultancy</h1>
            </div>
        </div>


        <div className='pt-20 mobile:grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 2xl:mx-52 mobile:mx-4 sm:mx-4 md:mx-10 lg:mx-20 xl:mx-20' >
            <div>
                <p>
                    Hommaston is committed in helping companies fulfilling their obligation with the NCDMB by facilitating and delivering 
                    their NC-HCD training program. We have done this for over a decade and have given our client a worry-free experience.
                </p>
            </div>
            <div></div>
        </div>

        <div className='mt-20 mb-10 2xl:mx-[200px] xl:mx-20 lg:mx-20 md:mx-10 sm:mx-5 mobile:mx-4
        2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 mobile:grid'>

            <div className='2xl:col-span-2 xl:col-span-2 lg:col-span-2 text-justify'>
                <p>
                    Meeting the client's expectations and delivering as required
                </p>

                <p className='my-8'>
                    Achievement of ‘work based’ skills with our deliverable-based training approach
                </p>

                <p>
                    At conclusion of training program, we would have imparted key industry knowledge,
                    improved trainees' chances of employability and increased capacity in industry.
                </p>

                <p className='my-8'>
                    Hommaston supports NCDMB common objective of increased empowerment, employment opportunities,
                    skills acquisition in all trainees and professional independence
                </p>

            </div>
            <div></div>
            

        </div>


        <div className='flex mobile:flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row
        2xl:mx-40 xl:mx-40 lg:mx-20 mobile:mx-4 2xl:items-center  2xl:justify-center xl:justify-center lg:justify-center md:justify-center gap-6 mobile:justify-start mb-12'>

            <div className='flex mobile:flex-row 2xl:flex-col xl:flex-col lg:flex-col md:flex-col items-center'>
                <div> <img src={icon1} alt="icon" className='w-20' /></div>
                <div className='md:text-center'> Tailored programs</div>
            </div>

            <div className='flex mobile:flex-row 2xl:flex-col xl:flex-col lg:flex-col md:flex-col items-center'>
                <div> <img src={icon2} alt="icon" className='w-20' /></div>
                <div className='md:text-center'> Industry relevant Curriculum</div>
            </div>

            <div className='flex mobile:flex-row 2xl:flex-col xl:flex-col lg:flex-col md:flex-col items-center'>
                <div> <img src={icon3} alt="icon" className='w-20' /></div>
                <div className='md:text-center'>Experienced Instructors</div>
            </div>

            <div className='flex mobile:flex-row 2xl:flex-col xl:flex-col lg:flex-col md:flex-col items-center'>
                <div> <img src={icon4} alt="icon" className='w-20' /></div>
                <div className='md:text-center'>Conducive facility.</div>
            </div>

        </div>


        <div className='h-[400px] w-full bg-cover bg-start py-8 my-20 flex justify-evenly' 
        style={{ backgroundImage:  `url(${bg1})` }}>  

            <div></div>

            <div className='2xl:w-[450px] xl:w-[450px] lg:w-[450px] md:w-[450px] mobile:w-[350px] 2xl:h-[450px] xl:h-[450px] lg:h-[450px] md:h-[450px] mobile:h-[500px]  pt-6 pb-12
             bg-white rounded-2xl 2xl:mt-[-50px] xl:mt-[-50px] lg:mt-[-50px] md:mt-[-50px] mobile:mt-[-80px] border-2
              border-gray-300 shadow-lg shadow-gray-300'>

                <form onSubmit={handleSubmit}>
                    <div className='flex mobile:flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row gap-2 px-4'>
                        <div className=''>
                            <input type="text" id='firstname' name="firstname" value={formData.firstname} onChange={handleChange} className='rounded-lg bg-gray-300 pl-2 mobile:w-full py-4' placeholder='firstname' />
                        </div>
                        <div>
                            <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} className='rounded-lg bg-gray-300 pl-2 mobile:w-full py-4' placeholder='lastname' />
                        </div>
                    </div>

                    <div className='px-4'>
                        <input type="text" id="companyname" name="companyname" value={formData.companyname} onChange={handleChange} className='rounded-lg bg-gray-300 pl-2 my-2 w-full py-4 ' placeholder='company name' />
                    </div>

                    <div className='flex mobile:flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row gap-2 px-4'>
                        <div className=''>
                            <input type="text" id="companyemail" name="companyemail" value={formData.companyemail} onChange={handleChange} className='rounded-lg bg-gray-300 pl-2 mobile:w-full py-4' placeholder='company email' />
                        </div>
                        <div>
                            <input type="text" id="phonenumber" name="phonenumber" value={formData.phonenumber} onChange={handleChange} className='rounded-lg bg-gray-300 pl-2 mobile:w-full py-4' placeholder='phone no' />
                        </div>
                    </div>

                    <div className='px-4'>
                        <textarea id="otherinfo" name="otherinfo" value={formData.otherinfo} onChange={handleChange} className='rounded-lg bg-gray-300 pl-2 my-2 w-full 2xl:pb-20 xl:pb-20 lg:pb-20 md:pb-20 mobile:pb-10 py-4 text-sm' placeholder='other information you want us to know' />
                    </div>

                    <div className='text-center 2xl:mt-8 xl:mt-8 lg:mt-8 md:mt-8 mobile:mt-2'>
                        <button type="submit" className='bg-[#0504AA] text-white rounded-md px-4 py-2 hover:scale-105 duration-200'>Send Message</button>
                    </div>
                    
                </form>
            </div>

        </div>

        <Footer />

    </div>
  )
}

export default Nchcdp