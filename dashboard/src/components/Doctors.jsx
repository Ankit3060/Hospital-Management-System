import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../main';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Doctors() {
  const [doctors,setDoctors]  = useState();
  const {isAuthenticated} = useContext(Context);

  // Fetch doctors
  useEffect(() => {
    const fetchDoctors = async ()=>{
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/doctors",
          {
            withCredentials: true
          }
        );
        setDoctors(response.data.doctors);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    fetchDoctors();
  }, [])

  if(!isAuthenticated){
    return <Navigate to =  {"/login"} />
  }

  //This is for the date format
  // const formatDate = (dateString) => {
  //   const options = { year: 'numeric', month: 'long', day: 'numeric' };
  //   return new Date(dateString).toLocaleDateString(undefined, options);
  // };
  

  return (
    <>
    <section className="page doctors">
      <h1>DOCTORS</h1>
      <div className="banner">
        {
          doctors && doctors.length > 0 ? (doctors.map(element=>{
            return (
              <div className="card">
                <img src={element.docAvatar && element.docAvatar.url} alt="Doctor avatar" />
                <h4>{`${element.firstName} ${element.lastName}`}</h4>
              <div className="details">
                <p>Email : <span>{element.email}</span></p>
                <p>Phone Number : <span>{element.phone}</span></p>
                <p>DOB : <span>{element.dob.substr(0,10)}</span></p>
                <p>Department : <span>{element.doctorDepartment}</span></p>
                <p>PAN : <span>{element.pan}</span></p>
                <p>Gender : <span>{element.gender}</span></p>
              </div>
              </div>  
            )
          })) : (<h1>No Registered Doctors Found !</h1>)
        }
      </div>
    </section>
    </>
  )
}

export default Doctors