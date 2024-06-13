import React, { useContext, useState} from 'react'
import { Context } from '../main';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Register() {
  const {isAuthenticated,setIsAuthenticated} = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pan, setPan] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response =await axios.post(
        "http://localhost:4000/api/v1/user/patient/register",
        {firstName,lastName,email,phone,pan,dob,gender,password,role:"Patient"},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(true);
        navigateTo("/");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setPan("");
        setDob("");
        setGender("");
        setPassword("");
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  if(isAuthenticated){
    return <Navigate to={"/"} />
  }

  return (
    <div className='container form-component register-form'>
      <h2>Sign Up</h2>
      <p>Please Sign Up To Continue</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptatem odit eaque, ad doloremque nostrum facilis?
      </p>
      <form onSubmit={handleRegister}>
        <div>
        <input 
              type="text" 
              placeholder='First Name' 
              value={firstName}
              onChange={(e)=>setFirstName(e.target.value)} 
        />
        <input 
              type="text" 
              placeholder='Last Name' 
              value={lastName}
              onChange={(e)=>setLastName(e.target.value)} 
        />
        </div>

        <div>
        <input 
              type="text" 
              placeholder='Email' 
              value={email}
              onChange={(e)=>setEmail(e.target.value)} 
        />
        <input 
              type="tel" 
              placeholder='Phone' 
              value={phone}
              onChange={(e)=>setPhone(e.target.value)} 
        />
        </div>

        <div>
        <input 
              type="text" 
              placeholder='PAN' 
              value={pan}
              onChange={(e)=>setPan(e.target.value)} 
        />
        <input 
              type="date" 
              placeholder='DOB' 
              value={dob}
              onChange={(e)=>setDob(e.target.value)} 
        />
        </div>

        <div>
        <select value={gender} onChange={(e)=>setGender(e.target.value)}>
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input 
              type="password" 
              placeholder='Password' 
              value={password}
              onChange={(e)=>setPassword(e.target.value)} 
        />
        </div>

        {/* Register now option */}
        <div style={{gap : "10px", justifyContent:"flex-end" , flexDirection:"row"}}>
          <p style={{marginBottom:0}}>Already Registerd?</p>
          <Link to={"/login"} style={{textDecoration:"none",alignItems:"center"}}>
            Login Now
          </Link>
        </div>

        {/* Register button */}
        <div style={{justifyContent:"center" , alignItems:"center"}}>
          <button type="submit">Register Now</button>
        </div>

      </form>
    </div>
  )
}

export default Register