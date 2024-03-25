import React, { useState, useEffect } from 'react';
import seconepngtwo from "../assets/seconepngtwo.png";
import seconepng5 from "../assets/seconepng5.png";

const Changeimg = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [seconepng5, seconepngtwo];

    useEffect( () => {
        const interval = setInterval( () => {
            setCurrentImageIndex( (prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); 
        return () => clearInterval(interval);

    }, [images.length]);


  return (
    <div className=' flex justify-center items-center mobile:mb-0 md:mb-0'>
        <img src={images[currentImageIndex]} alt="img" className=' w-120' />
    </div>
  )
}

export default Changeimg