import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Departments from '../components/Departments'
import MessageForm from '../components/MessageForm'
import { useContext } from 'react'
import { Context } from '../main'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Home() {
  const {isAuthenticated, setIsAuthenticated} = useContext(Context);
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  },[isAuthenticated,setUser])
  


  return (
    <>
    <Hero title={`Welcome to AK Medicals Institute | ${user.firstName} ${user.lastName} | Your trusted healthcare provider`} imageUrl={"/hero.png"} />
    <Biography imageUrl={"/about.png"}/>
    <Departments />
    <MessageForm />
    </>
  )
}

export default Home