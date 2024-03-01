import React, { useState, useEffect } from 'react';
import tower from "../assets/tower.png";
import mission from "../assets/mission.png";
import vission from "../assets/vission.png";
import corevalues from "../assets/corevalues.png";

const Changeimg = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [mission, vission, corevalues];

    useEffect( () => {
        const interval = setInterval( () => {
            setCurrentImageIndex( (prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); 
        return () => clearInterval(interval);

    }, [images.length]);


  return (
    <div className=' flex justify-center items-center'>
        <img src={images[currentImageIndex]} alt="img" className=' w-80' />
    </div>
  )
}

export default Changeimg