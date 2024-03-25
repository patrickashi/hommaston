import React, { useState } from 'react';
import axios from 'axios';
import blendedimg from "../assets/blendedimg.jpg";



const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : null;
};

const Blueform = () => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        selectcourse: '',
        email: '',
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

            await axios.post('https://patrickpeko.pythonanywhere.com/api/blended_submission/', formData, { headers });

            alert('Form submitted successfully!');
            setFormData({
                firstname: '',
                lastname: '',
                selectcourse: '',
                email: '',
                phonenumber: '',
                otherinfo: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form. Please try again.');
        }
    };


  return (
    <div className='font-Montserrat'>


        {/* form div */}
        <div className='h-[400px] w-full bg-cover bg-start py-6 mt-12 mb-40 flex justify-center' 
        style={{ backgroundImage:  `url(${blendedimg})` }}>  

            <div className='2xl:w-[450px] xl:w-[450px] lg:w-[450px] md:w-[450px] mobile:w-[350px] 2xl:h-[480px] xl:h-[480px] lg:h-[480px] md:h-[480px] mobile:h-[550px]  pt-6 pb-12
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
                    <select id="selectcourse" name="selectcourse" value={formData.selectcourse} onChange={handleChange} className='rounded-lg bg-gray-300 pl-2 my-2 w-full py-4 '>
                                <option value="">Select Course</option>
                                <option value="Course 1">Project planning</option>
                                <option value="Course 2">Agile</option>
                                <option value="Course 3">Scrum</option>
                                <option value="Course 4">Resources</option>
                                <option value="Course 5">Project charter</option>
                                <option value="Course 5">Risk Management</option>
                                <option value="Course 5">Leadership</option>
                                <option value="Course 5">Communication</option>
                                <option value="Course 5">Project scheduling</option>
                                <option value="Course 5">Scope Management</option>
                                <option value="Course 5">Stakeholder management</option>
                                <option value="Course 5">Microsoft Project</option>
                                <option value="Course 5">Agile methodology basics</option>
                                <option value="Course 5">PMI PMBOK</option>
                                <option value="Course 5">Budgeting</option>
                                <option value="Course 5">Program Manager</option>
                                <option value="Course 5">Srum master</option>
                                <option value="Course 5">Project Management Fundamentals</option>
                                <option value="Course 5">ID Bootcamp</option>
                                <option value="Course 5">Introduction to Instructural Design</option>
                                <option value="Course 5">instructional design principles for </option>
                                <option value="Course 5">Learning Experience Design</option>
                                <option value="Course 5">Instructional design foundations and design</option>
                                <option value="Course 5">Course Design 101</option>
                                <option value="Course 5">Online course creation</option>
                                <option value="Course 5">Articulate 360 Training</option>
                                <option value="Course 5">Dash</option>
                                <option value="Course 5">Virtual Design Principles</option>
                                <option value="Course 5">Advanced process risk assessment and risk management</option>
                                <option value="Course 5">Risk, Crisis and Disaster management</option>
                                <option value="Course 5"></option>
                                <option value="Course 5"></option>
                                <option value="Course 5"></option>
                                <option value="Course 5"></option>
                                <option value="Course 5"></option>
                                <option value="Course 5"></option>
                                <option value="Course 5"></option>
                                <option value="Course 5"></option>
                                <option value="Course 5"></option>
                            </select>
                    </div>

                    <div className='flex mobile:flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row gap-2 px-4'>
                        <div className=''>
                            <input type="text" id="email" name="email" value={formData.companyemail} onChange={handleChange} className='rounded-lg bg-gray-300 pl-2 mobile:w-full py-4' placeholder='email' />
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


    </div>
  )
}

export default Blueform