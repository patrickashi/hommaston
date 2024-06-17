import React, { useState, useEffect } from 'react';
import bootcampwebflyer from "../assets/bootcampwebflyer.jpg";
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
        <button className="absolute top-0 right-0 m-0 text-gray-600 hover:text-gray-900" onClick={handleClose} >
          &times;
        </button>
        <a href={registrationUrl}>
          <img src={bootcampwebflyer} size={40} alt="Advert" className="cursor-pointer w-[650px]" />
        </a>
      </div>
    </div>
  );
};

export default PopUp;
