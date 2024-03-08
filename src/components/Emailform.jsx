// React component handling form submission
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Emailform() {
    const [email, setEmail] = useState('');

    useEffect(() => {
        // Fetch CSRF token from cookie when the component mounts
        const csrfToken = getCsrfToken();
        axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://patrickpeko.pythonanywhere.com/api/form_submission/', { email });
            alert('Email submitted successfully!');
            setEmail('');
        } catch (error) {
            console.error('Error submitting email:', error);
            alert('Error submitting email. Please try again.');
        }
    };

    // Function to get CSRF token from cookie
    const getCsrfToken = () => {
        const csrfCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('csrftoken='));
        if (csrfCookie) {
            return csrfCookie.split('=')[1];
        }
        return null;
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* CSRF token will be sent automatically in the request headers */}

            <div className='flex mt-[3rem] items-center justify-between 2xl:w-[40rem] xl:w-[40rem] lg:w-[40rem] h-14 bg-white rounded-2xl border-[#cccccc]
            overflow-hidden mobile:w-[23rem]'>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email address here' className='flex-[7] pl-[10px] text-black  border-none outline-none'/>
                <button type="submit" className='bg-[#FF0000] flex-1 h-full text-white px-4'>Subscribe</button>
            </div>
        </form>
    );
}

export default Emailform;
