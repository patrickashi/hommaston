import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : null;
};

const ReceiptUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const onDrop = (acceptedFiles) => {
        setFile(acceptedFiles[0]);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,
        accept: 'image/*,application/pdf' // Accept images and PDFs
    });
    // const navigate = useNavigate();

    const handleSubmit = async (e) => {
        const csrftoken = getCookie('csrftoken');
         // Include CSRF token in request headers
        const headers = {
            'X-CSRFToken': csrftoken,
            'Content-Type': 'multipart/form-data'
        };
        e.preventDefault();

        if (!file) {
            setMessage('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('receipt', file);

        try {
            await axios.post(
                'https://patrickpeko.pythonanywhere.com/api/upload_receipt/', formData, {headers});
            setMessage('Receipt uploaded successfully');
            // navigate('/');
        } catch (error) {
            console.error('Error uploading receipt:', error);
            setMessage('Failed to upload receipt');
        }
    };

    return (
        <div className="container mx-auto p-4 font-Montserrat">
            <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">

                <h1 className='text-center text-5xl font-bold text-red-500 mb-10'>Payment</h1>

                <p className='text-center font-bold'>Bank Name</p>
                <p className='text-center text-2xl font-bold text-red-500 mb-4'>First Bank</p>

                <p className='text-center font-bold'>Account Number</p>
                <p className='text-center text-3xl font-bold text-red-500 mb-4'>2023354458</p>

                <p className='text-center font-bold'>Account Name</p>
                <p className='text-center text-2xl font-bold text-red-500 mb-8'>Hommaston Limited</p>


                <div {...getRootProps()} className="border-2 border-dashed border-gray-400 p-4 mb-4 cursor-pointer">
                    <input {...getInputProps()} />
                    {file ? (
                        <p>{file.name}</p>
                    ) : (
                        <p>Drop your payment receipt here, or click to select a file</p>
                    )}
                </div>
                <div className='text-center mb-2'>
                    <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-4 rounded w-full">Submit</button>
                </div>
                {message && <p>{message}</p>}
                <div className='text-center mb-4'>
                    <div className='mt-2'>
                        <Link to="https://wa.me/message/5AXEN3LR5JU6P1">
                            <div className="bg-white hover:bg-red-600 duration-200 hover:text-white text-black border border-red-500 font-bold py-4 px-4 rounded w-full">Call for confirmation</div>
                        </Link>
                    </div>
                </div>
                
            </form>
            
        </div>
    );
};

export default ReceiptUpload;
