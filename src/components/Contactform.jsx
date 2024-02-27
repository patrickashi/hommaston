import React from 'react'

const Contactform = () => {
  return (
    <div>
        <iframe
        title="Contact Form"
        src="https://hommaston.formstack.com/forms/contact_us"
        frameBorder="0"
        style={{ width: '100%', height: '1250px', border: 'none' }}
        scrolling="no"
      >
        {/* Fallback content for browsers that do not support iframes */}
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  )
}

export default Contactform