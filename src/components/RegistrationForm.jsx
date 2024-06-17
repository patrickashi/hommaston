import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : null;
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    gender: '',
    age: '',
    sponsor_name: '',
    interested_course: '',
    mode_of_attendance: '',
    receipt: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

//   const handleFileChange = (e) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       receipt: e.target.files[0],
//     }));
//   };

  const handleSubmit = async (e) => {

    const csrftoken = getCookie('csrftoken');

    // Include CSRF token in request headers
    const headers = {
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json'
    };

    e.preventDefault();
    // const data = new FormData();
    // for (const key in formData) {
    //   data.append(key, formData[key]);
    // }

    try {
      const response = await axios.post('https://patrickpeko.pythonanywhere.com/api/teentech/', formData, { headers });
      console.log('Form submitted successfully:', response.data);
      alert('Form submitted successfully!');
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        gender: '',
        age: '',
        sponsor_name: '',
        interested_course: '',
        mode_of_attendance: '',
      });

      navigate('/Receiptuploadp');

    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md my-4">

      <h1 className='text-center mobile:text-3xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-red-600 mb-4'>Registration Form</h1>

      <p className='text-center mb-4'>Register for the Hommaston Teen Tech Bootcamp</p>

      <div className='flex gap-2'>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          placeholder="First Name"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          required
        />
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="mb-4 p-2 border border-gray-300 rounded w-full"
        required
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="mb-4 p-2 border border-gray-300 rounded w-full"
        required
      />
      <div className='flex gap-2'>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          required
        >
          <option value="">Select Gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>
      <input
        type="text"
        name="sponsor_name"
        value={formData.sponsor_name}
        onChange={handleChange}
        placeholder="Sponsor's Name"
        className="mb-4 p-2 border border-gray-300 rounded w-full"
        required
      />
      <select
        name="interested_course"
        value={formData.interested_course}
        onChange={handleChange}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
        required
      >
        <option value="">Select Interested Course</option>
        <option value="UI/UX">UI/UX</option>
        <option value="AutoCAD">AutoCAD</option>
        <option value="Drone Piloting">Drone Piloting</option>
        <option value="Data Analysis">Data Analysis</option>
        <option value="Cyber Security">Cyber Security</option>
        <option value="Project Management">Project Management</option>
      </select>
      <p className='mb-2 text-xs'>Disclaimer: Please note that we cannot do drone piloting online.</p>
      <select
        name="mode_of_attendance"
        value={formData.mode_of_attendance}
        onChange={handleChange}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
        required
      >
        <option value="">Select Mode of Attendance</option>
        <option value="Physical">Physical</option>
        <option value="Virtual">Virtual</option>
      </select>
    
        <div>
        <button type="submit" className="bg-red-600 text-white p-2 rounded w-full">Submit </button>
        </div>
        
    </form>
  );
};

export default RegistrationForm;
