import React from 'react'

function Hero({title, imageUrl}) {
  return (
    <div className='hero container'>
        <div className="banner">
            <h1>{title}</h1>
            <p>At our hospital, we are dedicated to providing the highest quality of care with compassion 
                and integrity. Our promise to you is a commitment to excellence in healthcare, where every 
                patient is treated with dignity and respect. We strive to create a safe and supportive 
                environment, ensuring your well-being and comfort throughout your healthcare journey. 
                Your health is our priority, and we are here to support you every step of the way.
            </p>
        </div>
        <div className="banner">
            <img src={imageUrl} alt="hero" className='animated-image '/>
            <span>
                <img src="/Vector.png" alt="vector" />
            </span>
        </div>  
    </div>
  )
}

export default Hero