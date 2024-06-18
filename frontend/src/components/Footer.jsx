import React from 'react'
import { Link } from 'react-router-dom';
import {FaPhone,FaLocationArrow} from "react-icons/fa";
import {MdEmail} from "react-icons/md"

function Footer() {

    const hours = [
        {
          id: 1,
          day: "Monday",
          time: "9:00 AM - 11:00 PM",
        },
        {
          id: 2,
          day: "Tuesday",
          time: "12:00 PM - 12:00 AM",
        },
        {
          id: 3,
          day: "Wednesday",
          time: "10:00 AM - 10:00 PM",
        },
        {
          id: 4,
          day: "Thursday",
          time: "9:00 AM - 9:00 PM",
        },
        {
          id: 5,
          day: "Monday",
          time: "3:00 PM - 9:00 PM",
        },
        {
          id: 6,
          day: "Saturday",
          time: "9:00 AM - 3:00 PM",
        },
      ];

  return (
    <>
    <footer className={"container"}>
        <hr />
        <div className="content">
            <div>
                <img src="/logo.png" alt="logo" className='logo-img'/>
            </div>
            
            <div>
                <h4>Quicks Links</h4>
                <ul>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/appointment"}>Appointment</Link>
                    <Link to={"/about"}>About</Link>
                </ul>
            </div>

            <div>
                <h4>Hours</h4>
                {
                    hours.map((hour) => (
                        // <p key={hour.id}>{hour.day}: {hour.time}</p>
                        <li key={hour.id}>
                            <span>{hour.day} : {hour.time}</span>
                        </li>
                    ))
                }
            </div>

            <div>
                <h4>Contact</h4>
                <div>
                    <FaPhone />
                    <span>+91 93928-33614</span>
                </div>
                <div>
                    <MdEmail />
                    <a  href="mailto:ankit330660@gmail.com"
                        style={{ textDecoration: 'none', color: 'inherit' }}>
                          ankit330660@gmail.com
                    </a>
                </div>
                <div>
                    <FaLocationArrow />
                    <span>Mohali, India</span>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer