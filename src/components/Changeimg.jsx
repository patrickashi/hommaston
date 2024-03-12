import React, { useState, useEffect } from 'react';

import seconepngone from "../assets/seconepngone.png";
import seconepngtwo from "../assets/seconepngtwo.png";
import seconestackedbooks from "../assets/seconestackedbooks.png";

const Changeimg = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [seconepngone, seconepngtwo, seconestackedbooks];

    useEffect( () => {
        const interval = setInterval( () => {
            setCurrentImageIndex( (prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); 
        return () => clearInterval(interval);

    }, [images.length]);


  return (
    <div className=' flex justify-center items-center mobile:mb-0 md:mb-0'>
        <img src={images[currentImageIndex]} alt="img" className=' w-80' />
    </div>
  )
}

export default Changeimg