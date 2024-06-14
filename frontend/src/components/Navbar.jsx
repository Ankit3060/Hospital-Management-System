import React,{useContext, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Context} from '../main'
import { toast } from 'react-toastify';
import axios from 'axios';
import {GiHamburgerMenu} from "react-icons/gi"

function Navbar() {
    const [show, setShow] = useState(false);
    const {isAuthenticated, setIsAuthenticated} = useContext(Context);
    const navigateTo = useNavigate();

    // Logout function
    const handleLogout = async () => {
        await axios.get(
            "http://localhost:4000/api/v1/user/patient/logout",
            {
                withCredentials: true,
            }
        ).then((res)=>{
            toast.success(res.data.message);
            setIsAuthenticated(false);
        })
        .catch((error)=>{
            toast.error(error.response.data.message);
        })
    }
    
    // Redirect to login page
    const goToLogin = () => {
        navigateTo("/login");
      };

  return (
    <nav className='container'>
        <div className='logo' style={{ cursor: "pointer" }}>
        <img src="/logo.png" alt="logo" className='logo-img'/>
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
            <div className="links">
                <Link to={"/"}>HOME</Link>
                <Link to={"/appointment"}>APPOINTMENT</Link>
                <Link to={"/about"}>ABOUT US</Link>
            </div>

            {/* Here checking if user is authenticated or not if yes then logout option will appear */}
            {isAuthenticated ? (
            <button className="logoutBtn btn" onClick={handleLogout} style={{cursor:"pointer"}}>
              LOGOUT
            </button>
          ) : (
            <button className="loginBtn btn" onClick={goToLogin} style={{cursor:"pointer"}}>
              LOGIN
            </button>
          )}
        </div>
        <div className='hamburger' onClick={()=>setShow(!show)}>
            <GiHamburgerMenu />
        </div>
    </nav>
  )
}

export default Navbar