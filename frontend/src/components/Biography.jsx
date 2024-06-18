import React from 'react'

function Biography({imageUrl}) {
  return (
    <div className='container biography'>
        <div className="banner">
            <img src={imageUrl} alt="about" />
        </div>
        <div className="banner cursive">
            <p>Biography</p>
            <h3>Who We Are</h3>
            <p>
                Welcome to our hospital, where your health and well-being are our top priorities. 
                With a legacy of compassionate care and cutting-edge medical services, we are dedicated 
                to providing exceptional healthcare to our community. Our team of highly skilled doctors, 
                nurses, and support staff are committed to delivering personalized and comprehensive care 
                tailored to each patient's unique needs.
            </p>
            <p>
                At our hospital, we believe in a patient-centric approach, ensuring that you are at the 
                heart of every decision we make. Our state-of-the-art facilities and advanced medical 
                technologies enable us to offer a wide range of services, from routine check-ups to 
                complex surgeries, all under one roof.
            </p>
            <p>
                Our mission is to create a healing environment where you feel safe, respected, and cared 
                for. We strive to foster a culture of excellence, where every member of our team works 
                tirelessly to achieve the best possible outcomes for our patients.
            </p>
            <p>
                We are proud to be a trusted healthcare provider in the community, continually advancing 
                our practices to meet the evolving needs of our patients. Your health journey is our 
                priority, and we are here to support you every step of the way.
            </p>
            <p>
                Thank you for choosing our hospital. We are honored to be your partner in health.
            </p>
        </div>

    </div>
  )
}

export default Biography