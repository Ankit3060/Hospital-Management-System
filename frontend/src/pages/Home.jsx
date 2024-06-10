import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Departments from '../components/Departments'
import MessageForm from '../components/MessageForm'

function Home() {
  return (
    <>
    <Hero title={"Welcome to AK Medical Institute | Your trusted healthcare provider"} imageUrl={"/hero.png"} />
    <Biography imageUrl={"/about.png"}/>
    <Departments />
    <MessageForm />
    </>
  )
}

export default Home