import React, { useState, useEffect } from 'react';
import tower from "../assets/tower.png";
import mission from "../assets/mission.png";
import vission from "../assets/vission.png";
import corevalues from "../assets/corevalues.png";

import seconepng1 from "../assets/seconepng1.png";
import seconepng2 from "../assets/seconepng2.png";
import seconepng3 from "../assets/seconepng3.png";

const Changeimg = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [seconepng1, seconepng2, seconepng3];

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