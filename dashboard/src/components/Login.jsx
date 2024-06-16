import React, { useContext, useState } from 'react'
import { Context } from '../main';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';


function Login() {
  const {isAuthenticated,setIsAuthenticated} = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigateTO = useNavigate();

  // Login function
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response =await axios.post(
        "http://localhost:4000/api/v1/user/login",
        {email,password,confirmPassword,role:"Admin"},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigateTO('/');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  // If user is already authenticated then redirect to home page
  if(isAuthenticated){
    return <Navigate to='/'/>
  }

  return (
    <>
    <div className='container form-component'>
      <img src="/logo.png" alt="logo" className='logo' />
      <h1 className='form-title'>Welcome to AK Medical</h1>
      <p>Only Admin are allowed to access these resource!!</p>
      <form onSubmit={handleLogin}>
        <input 
              type="text" 
              placeholder='Email' 
              value={email}
              onChange={(e)=>setEmail(e.target.value)} 
        />
        <input 
            type="password" 
            placeholder='Password' 
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
          />
        <input 
            type="password" 
            placeholder='Confirm Password' 
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)} 
          />

        

        {/* Login button */}
        <div style={{justifyContent:"center" , alignItems:"center"}}>
          <button type="submit">Login</button>
        </div>
        
      </form>
    </div>
    </>
  )
}

export default Login