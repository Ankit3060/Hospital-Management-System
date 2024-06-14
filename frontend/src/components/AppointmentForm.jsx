import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


function AppointmentForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [pan, setPan] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [department, setDepartment] = useState("");
    const [doctorFirstName, setDoctorFirstName] = useState("");
    const [doctorLastName, setDoctorLastName] = useState("");
    const [address, setAddress] = useState("");
    const [hasVisited, setHasVisited] = useState("");

    const navigateTo = useNavigate();

    const departmentArray = [
        "Pediatrics",
        "Cardiology",
        "Neurologist",
        "Orthopedics",
        "Dermatology",
        "Gynecology",
        "Ophthalmology",
        "ENT",
        "Urology",
        "Radiology",
        "Dentist",
        "Physiotherapy",
    ];

    const [doctors,setDoctor] = useState([]);
    useEffect(() => {
      const fetchDoctor = async () => {
        const {data} = await axios.get(
            "http://localhost:4000/api/v1/user/doctors",
            {
                withCredentials: true,
            }
        );
        setDoctor(data.doctors);
        // console.log(data.doctors)
      }
      fetchDoctor();
    }, [])
    
    const handleAppointment = async (e) => {
        e.preventDefault();
        try {
            const hasVisitedBool = Boolean(hasVisited);
            const {data} = await axios.post(
                "http://localhost:4000/api/v1/appiontment/post",
                {
                    firstName,
                    lastName,
                    email,
                    phone,
                    pan,
                    dob,
                    gender,
                    appoinntment_date:appointmentDate,
                    department,
                    doctor_firstName:doctorFirstName,
                    doctor_lastName:doctorLastName,
                    address,
                    hasVisited:hasVisitedBool},
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setEmail("");
            setPhone("");
            setPan("");
            setDob("");
            setGender("");
            setAppointmentDate("");
            setDepartment("");
            setDoctorFirstName("");
            setDoctorLastName("");
            setAddress("");
            setHasVisited("");
            navigateTo("/")
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }

  return (
    <div className='container form-component appointment-form'>
      <h2>Appointment</h2>
      <form onSubmit={handleAppointment}>
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
        <input type="date" 
                placeholder='Appointment Date'
                value={appointmentDate}
                onChange={(e)=>setAppointmentDate(e.target.value)}
        />
        </div>

        {/* This is the select box for department of doctor */}
        <div>
            <select 
                value={department} 
                onChange={(e)=>{
                    setDepartment(e.target.value);
                    setDoctorFirstName("");
                    setDoctorLastName("");    
                }} 
            >
                <option value="" disabled>Select Department </option>
                {departmentArray.map((depart,index)=>{
                    return(
                        <option key={index} value={depart}>
                            {depart}
                        </option>
                    )
                })}
            </select>

            {/* This is select box for doctor */}
            <select 
                value={`${doctorFirstName} ${doctorLastName}`}
                onChange={(e)=>{
                    const [firstName,lastName] = e.target.value.split(" ");
                    setDoctorFirstName(firstName);
                    setDoctorLastName(lastName);
                }}
                disabled={!department}
            >
                <option value="" >Select Doctor </option>
                {
                    doctors.filter(doctor=>doctor.doctorDepartment === department).map((doctor,index)=>{
                        return(
                            <option key={index} value={`${doctor.firstName} ${doctor.lastName}`}>
                                {doctor.firstName} {doctor.lastName}
                            </option>
                        ) 
                    })
                }
            </select>
        </div>

        <textarea 
            rows={10} 
            value={address} 
            onChange={(e)=>setAddress(e.target.value)} 
            placeholder='Address' 
        />

        {/* Register now option */}
        <div style={{gap : "10px", justifyContent:"flex-end" , flexDirection:"row"}}>
          <p style={{marginBottom:0}}>Have you visited before?</p>
          <input 
            type="checkbox" 
            checked={hasVisited}
            onChange={(e)=>setHasVisited(e.target.checked)}
            style={{flex:"none",width:"25px"}}
          />
        </div>

        {/* Register button */}
        <div style={{justifyContent:"center" , alignItems:"center"}}>
          <button type="submit">Get Appointment</button>
        </div>

      </form>
    </div>
  )
}

export default AppointmentForm