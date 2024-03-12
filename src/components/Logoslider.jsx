import React, { useState, useEffect } from 'react';


import nysclogo from "../assets/nysclogo.png";
import lng from "../assets/lng.png";
import deltaafflick from "../assets/deltaafflick.png";
import eit from "../assets/eit.png";
import oando from "../assets/oando.png";
import koeing from "../assets/koenig.png";

import montegolg from "../assets/montegolg.png";
import dredgein from "../assets/dredgein.png";
import netcolg from "../assets/netcolg.png";
import tecnimontlg from "../assets/tecnimontlg.png";
import hybridlg from "../assets/hybridlg.png";

import logochevron from "../assets/logochevron.png";
import logoogtan from "../assets/logoogtan.jpg";
import logoshell from "../assets/logoshell.png";


const logosSet1 = [nysclogo, lng, deltaafflick, eit, oando, koeing];
const logosSet2 = [montegolg, netcolg, dredgein, hybridlg, tecnimontlg, lng];
const logosSet3 = [logochevron, logoogtan, logoshell];

const Logoslider = () => {

  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSetIndex((prevIndex) => (prevIndex === 0 ? 1 : prevIndex === 1 ? 2 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []); // Run effect only once on component mount

  return (
    <div className="logo-slider 2xl:py-0 md:py-0 mobile:py-20 ">
      <div className={`logos-set ${currentSetIndex === 0 ? 'active' : ''} flex justify-between items-center 2xl:gap-5 xl:gap-2 lg:gap-8 md:gap-2 sm:gap-8 mobile:gap-8 flex-wrap`}>
        {logosSet1.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index}`} className="w-20 object-cover"  />
        ))}
      </div>
      <div className={`logos-set ${currentSetIndex === 1 ? 'active' : ''} flex justify-between items-center 2xl:gap-5 xl:gap-2 lg:gap-8 md:gap-2 sm:gap-8 mobile:gap-8 flex-wrap`}>
        {logosSet2.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index}`} className="w-20 object-cover"  />
        ))}
      </div>
      <div className={`logos-set ${currentSetIndex === 2 ? 'active' : ''} flex justify-between items-center 2xl:gap-5 xl:gap-2 lg:gap-8 md:gap-2 sm:gap-8 mobile:gap-8 flex-wrap`}>
        {logosSet3.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index}`} className="w-20 object-cover"  />
        ))}
      </div>
    </div>
  );
};

export default Logoslider;
