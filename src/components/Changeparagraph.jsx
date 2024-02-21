import React from 'react'
import { useState, useEffect } from 'react';
import '../landing-page.css';

const Changeparagraph = () => {

    const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
    const paragraphs = [
        "Share your Experience through Hommaston",
        "Your projects are our projects",
        "Self directed course at your own convinience and at your own Time",
        "Engineering, Project Management, Oil field, Consultancy, Training $ Capacity building",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentParagraphIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
        }, 5000); // Change every 5 seconds
    
        return () => clearInterval(interval);
      }, [paragraphs.length]);


  return (
    <div className='paragraph-container'>
        <p className='changing-paragraph'>
            {paragraphs[currentParagraphIndex]}
        </p>

        

    </div>
  )
}

export default Changeparagraph