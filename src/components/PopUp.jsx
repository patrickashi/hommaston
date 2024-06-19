import React, { useState, useEffect } from 'react';
import bootcampwebflyer1 from "../assets/bootcampwebflyer1.jpg"
import Registrationformp from '../pages/Registrationformp';

const PopUp = ({ registrationUrl }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    // Logic to show pop-up only on the first visit can be implemented here
    // For simplicity, it always shows on page load
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="relative bg-white p-4 rounded shadow-lg">
        <button className="absolute top-0 right-0 m-0 text-white hover:font-bold bg-red-600 w-10 " onClick={handleClose} >
          &times;
        </button>
        <a href={registrationUrl}>
          <img src={bootcampwebflyer1} size={40} alt="Advert" className="cursor-pointer w-[600px]" />
        </a>
        <div className="flex justify-center font-Montserrat">
          <a href={registrationUrl} className="bg-red-600 hover:bg-blue-600 hover:scale-105 duration-200 text-white font-bold py-2 rounded-full px-6">
            Register Now
          </a>
      </div>
      </div>
    </div>
  );
};

export default PopUp;
