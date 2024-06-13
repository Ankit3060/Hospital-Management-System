import React from 'react'
import AppointmentForm from '../components/AppointmentForm'
import Hero from '../components/Hero'

function Appointment() {
  return (
    <>
    <Hero title={"Schedule your appointment | AK Medical"} imageUrl={"/signin.png"}/>
    <AppointmentForm />
    </>
  )
}

export default Appointment