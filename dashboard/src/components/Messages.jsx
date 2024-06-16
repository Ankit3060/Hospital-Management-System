import React, { useContext, useState,useEffect} from 'react'
import { Context } from '../main';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function Messages() {
  const [messages,setMessages] = useState([]);
  const {isAuthenticated} = useContext(Context);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/message/getall",
          {
            withCredentials: true,
          }
        );
        setMessages(response.data.messages);
      } catch (error) {
        console.log("Error occured while fetching the message",error);
      }
    };
    fetchMessages();
  }, [])
  if(!isAuthenticated){
    return <Navigate to = {"/login"} />
  }

  return (
    <section className='page messages'>
      <h1>Messages</h1>
      <div className="banner">
        {
          messages && messages.length > 0 ? (messages.map(element=>{
            return (
              <div className="card" key={element._id}>
                <div className='details'>
                <p>First Name : <span>{element.firstName}</span></p>
                <p>Last Name : <span>{element.lastName}</span></p>
                <p>Email : <span>{element.email}</span></p>
                <p>Phone Number: <span>{element.phone}</span></p>
                <p>Message : <span>{element.message}</span></p>
                </div>
                
              </div>
            )
          })) : (<h1> No messages !</h1>)
        }
      </div>
    </section>
  )
}

export default Messages