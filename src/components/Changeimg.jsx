import React, { useState, useEffect } from 'react';
import manwhite from "../assets/manwhite.png";
import trafficlight from "../assets/trafficlight.png";

const Changeimg = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [manwhite, trafficlight];

    useEffect( () => {
        const interval = setInterval( () => {
            setCurrentImageIndex( (prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); 
        return () => clearInterval(interval);

    }, [images.length]);


  return (
    <div className='flex justify-center items-center'>
        <img src={images[currentImageIndex]} alt="lpimg" className='w-80' />
    </div>
  )
}

export default Changeimg