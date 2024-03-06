import React, { useState } from 'react';
import axios from 'axios';
import contactmapbg from "../assets/contactmapbg.png";

import { FaCirclePlay } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";



// Function to retrieve CSRF token from cookie
const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : null;
};


const Myform = () => {
    const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      email: '',
      address: '',
      phone_number: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
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
        const response = await axios.post('https://patrickpeko.pythonanywhere.com/', formData, { headers });
        console.log('Form submitted successfully:', response.data);
        // Reset form after successful submission
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          address: '',
          phone_number: '',
          message: ''
        });

      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };


    return (
        // <form onSubmit={handleSubmit}>
        //     <input type="text" name="name" value={formData.name} onChange={handleChange} />
        //     <input type="email" name="email" value={formData.email} onChange={handleChange} />
        //     <textarea name="message" value={formData.message} onChange={handleChange} />
        //     <button type="submit">Submit</button>
        // </form>

       

        <div className='pt-20 mb-40 h-[400px] w-full bg-cover bg-start py-8 flex justify-evenly'
        style={{ backgroundImage:  `url(${contactmapbg})` }}>

            <div className='mobile:hidden 2xl:block xl:block lg:block md:block'>
            <p className='text-2xl font-bold text-[#FF0000] animate-ping'>Contact Us</p>
            </div>

            <div className='2xl:w-[450px] xl:w-[450px] lg:w-[450px] md:w-[450px] mobile:w-[350px] 2xl:h-[450px] xl:h-[450px] lg:h-[450px] md:h-[450px] mobile:h-[500px]  pt-6 pb-12
            bg-white rounded-2xl 2xl:mt-[-90px] xl:mt-[-90px] lg:mt-[-90px] md:mt-[-90px] mobile:mt-[-100px] border-2
            border-gray-300 shadow-lg shadow-[#FF0000]'>

                <form onSubmit={handleSubmit}>
                    <div className='flex mobile:flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row gap-2 px-4'>
                        <div className=''>
                            <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} className='rounded-lg bg-gray-300 pl-2 mobile:w-full py-4' placeholder='firstname' />
                        </div>
                        <div>
                            <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} className='rounded-lg bg-gray-300 pl-2 mobile:w-full py-4' placeholder='lastname' />
                        </div>
                    </div>

                    <div className='px-4'>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className='rounded-lg bg-gray-300 pl-2 my-2 w-full py-4 ' placeholder='Email' />
                    </div>

                    <div className='flex mobile:flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row gap-2 px-4'>
                        <div className=''>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} className='rounded-lg bg-gray-300 pl-2 mobile:w-full py-4' placeholder='Address' />
                        </div>
                        <div>
                            <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange} className='rounded-lg bg-gray-300 pl-2 mobile:w-full py-4' placeholder='phone no' />
                        </div>
                    </div>

                    <div className='px-4'>
                        <textarea name="message" value={formData.message} onChange={handleChange} className='rounded-lg bg-gray-300 pl-2 my-2 w-full 2xl:pb-20 xl:pb-20 lg:pb-20 md:pb-20 mobile:pb-10 py-4 text-sm' placeholder='other information you want us to know' />
                    </div>

                    <div className='flex 2xl:mt-8 xl:mt-8 lg:mt-8 md:mt-8 mobile:mt-2 justify-between'>

                        <div className='flex items-center ml-2'>
                        <ul className='flex gap-8'>
                            <li><LiaLinkedinIn size={20} className='shadow-md shadow-gray-300 rounded-full'/></li>
                            <li> <FaInstagramSquare size={20} className='shadow-md shadow-gray-300 rounded-full' /> </li>
                            <li> <FaCirclePlay size={20} className='shadow-md shadow-gray-300 rounded-full'/></li>
                            <li><FaFacebook size={20} className='shadow-md shadow-gray-300 rounded-full'/></li>
                        </ul>
                        </div> 

                        <div>
                        <button type="submit" className='bg-[#0504AA] text-white rounded-tl rounded-bl px-4 py-2 hover:scale-105 duration-200'>Send Message</button>
                        </div>
                        
                    </div>
                    
                </form>
            </div> 



            
        </div>


        
    );
};

export default Myform;
