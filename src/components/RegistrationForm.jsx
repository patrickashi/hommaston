import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : null;
};

function RegistrationForm() {
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
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
      await axios.post('https://patrickpeko.pythonanywhere.com/api/teentech/', formData, { headers });
      navigate('/payment');
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded shadow-md">
      <div className="mb-4">
        <label className="block mb-2">First Name</label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Last Name</label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Sponsor's Name</label>
        <input
          type="text"
          name="sponsor_name"
          value={formData.sponsor_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Interested Course</label>
        <select
          name="interested_course"
          value={formData.interested_course}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="UI/UX">UI/UX</option>
          <option value="AutoCAD">AutoCAD</option>
          <option value="Drone Piloting">Drone Piloting</option>
          <option value="Data Analysis">Data Analysis</option>
          <option value="Cyber Security">Cyber Security</option>
          <option value="Project Management">Project Management</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Mode of Attendance</label>
        <select
          name="mode_of_attendance"
          value={formData.mode_of_attendance}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Physical">Physical</option>
          <option value="Virtual">Virtual</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}

export default RegistrationForm;
