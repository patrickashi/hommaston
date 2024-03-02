import React, { useState, useEffect } from 'react';
 // Import your CSS file for styling

const testimonials = [
  { id: 1, heading: "Impactfull Experience", body: "The experience got me a job at SPIE oil and gas engineering due to my gained ability to express sufficient knowledge and expertise in the utilisation of necessary engineering softwares such as Plant 3D in order to produce specificdeliverables for the Egina project as well as the AKPO project (2 projects SPIE oil and gas services were involved in).  I have now left SPIE and joined British American Tobacco Nigeria. Currently in the supplychain department as their factory scheduler. (Jeffrey Ijeomah)" },
  { id: 2, heading: "Post Training Help", body: "My encounter with Hommaston was a perfect introduction to the Oil and Gas industry.Hommaston followed up to see how well I was doing with the skills gained after training.(Ohia Ikenna C)" },
  { id: 3, heading: "Testimonial 3", body: "Hommaston’s pricing is affordable and gives value for money.(Remilekun Oyekan)" }
];

const Changetestimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-slider">
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial.id}
          className={`testimonial ${index === currentTestimonialIndex ? 'active' : ''}`}
        >
          <h2 className='text-2xl mb-4'>{testimonial.heading}</h2>
          <p>{testimonial.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Changetestimonials;
