import React, { useContext, useState } from 'react'
import { Context } from '../main';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddNewAdmin() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [pan,setPan] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password,setPassword] = useState("");

  const {isAuthenticated,setIsAuthenticated} =  useContext(Context)
  const navigateTo = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/admin/addnew",

      )
    } catch (error) {
      
    }
  }

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response =await axios.post(
  //       "http://localhost:4000/api/v1/user/patient/register",
  //       {firstName,lastName,email,phone,pan,dob,gender,password,role:"Patient"},
  //       {
  //         withCredentials: true,
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       toast.success(res.data.message);
  //       setIsAuthenticated(true);
  //       navigateTo("/");
  //       setFirstName("");
  //       setLastName("");
  //       setEmail("");
  //       setPhone("");
  //       setPan("");
  //       setDob("");
  //       setGender("");
  //       setPassword("");
  //     });
  //   } catch (error) {
  //     toast.error(error.response.data.message);
  //   }
  // }

  // if(isAuthenticated){
  //   return <Navigate to={"/"} />
  // }


  return (
    <>
    </>
  )
}

export default AddNewAdmin