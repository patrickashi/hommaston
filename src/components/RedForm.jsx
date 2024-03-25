import React, { useState } from 'react';
import axios from 'axios';
import blendedimg from "../assets/blendedimg.jpg";




const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : null;
};

const RedForm = () => {

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

            await axios.post('https://patrickpeko.pythonanywhere.com/', formData, { headers });

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
                                <option value="project planning">Project planning</option>
                                <option value="Agile">Agile</option>
                                <option value="Scrum">Scrum</option>
                                <option value="Resources">Resources</option>
                                <option value="Project charter">Project charter</option>
                                <option value="Risk Management">Risk Management</option>
                                <option value="Leadership">Leadership</option>
                                <option value="Communication">Communication</option>
                                <option value="Project scheduling">Project scheduling</option>
                                <option value="Scope Management">Scope Management</option>
                                <option value="Stakeholder management">Stakeholder management</option>
                                <option value="Microsoft Project">Microsoft Project</option>
                                <option value="Agile methodology basics">Agile methodology basics</option>
                                <option value="PMI PMBOK">PMI PMBOK</option>
                                <option value="Budgeting">Budgeting</option>
                                <option value="Program Manager">Program Manager</option>
                                <option value="Srum master">Srum master</option>
                                <option value="Project Management Fundamentals">Project Management Fundamentals</option>
                                <option value="ID Bootcamp">ID Bootcamp</option>
                                <option value="Introduction to Instructural Design">Introduction to Instructural Design</option>
                                <option value="instructional design principles for">instructional design principles for </option>
                                <option value="Learning Experience Design">Learning Experience Design</option>
                                <option value="Instructional design foundations and design">Instructional design foundations and design</option>
                                <option value="Course Design 101">Course Design 101</option>
                                <option value="Online course creation">Online course creation</option>
                                <option value="Articulate 360 Training">Articulate 360 Training</option>
                                <option value="Dash">Dash</option>
                                <option value="Virtual Design Principles">Virtual Design Principles</option>
                                <option value="Advanced process risk assessment and risk management">Advanced process risk assessment and risk management</option>
                                <option value="Risk, Crisis and Disaster management">Risk, Crisis and Disaster management</option>
                                <option value="Radiation Safety Officer Course">Radiation Safety Officer Course</option>
                                <option value="Marine Safety Course">Marine Safety Course</option>
                                <option value="Injury and illness Prevention course">Injury and illness Prevention course</option>
                                <option value="Fire and Arson management and control">Fire and Arson management and control</option>
                                <option value="Developing an effective safety culture">Developing an effective safety culture</option>
                                <option value="Safety technology and risk management">Safety technology and risk management</option>
                                <option value="Hazardous waste management and pollution training">Hazardous waste management and pollution training</option>
                                <option value="Environmental Management Systems (EMS)">Environmental Management Systems (EMS)</option>
                                <option value="Behaviour based safety course">Behaviour based safety course</option>
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

export default RedForm