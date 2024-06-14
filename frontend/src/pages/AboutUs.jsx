import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'

function AboutUs() {
  return (
    <>
      <Hero
        title={"Learn More About Us | AK Medical Institute"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  )
}

export default AboutUs